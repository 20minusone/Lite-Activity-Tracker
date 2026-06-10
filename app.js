let entries=JSON.parse(localStorage.getItem("tracker_entries")||"[]");
let editId=null;

const STATUS_STYLE={
  "In Progress": "background:#1e2a5e;color:#7fa8f8",
  "Pending":     "background:#2e2a14;color:#e0b84a",
  "Done":        "background:#0d2e24;color:#3dba8c",
  "Hold":        "background:#2e1a1a;color:#e06060"
};

function saveStore(){localStorage.setItem("tracker_entries",JSON.stringify(entries));}

function fmt(iso){
  if(!iso) return "";
  const d=new Date(iso+"T00:00:00");
  return d.toLocaleDateString("en-MY",{day:"2-digit",month:"short",year:"numeric"});
}

function fmt2(cmd){ document.execCommand(cmd,false,null); document.getElementById("context").focus(); }

function insertLink(){
  const url=prompt("Enter URL:");
  if(url) document.execCommand("createLink",false,url);
}

function insertImage(ev){
  const file=ev.target.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=function(e){
    document.getElementById("context").focus();
    document.execCommand("insertImage",false,e.target.result);
  };
  reader.readAsDataURL(file);
  ev.target.value="";
}

function getCtx(){ return document.getElementById("context").innerHTML.trim(); }
function setCtx(html){ document.getElementById("context").innerHTML=html||""; }
function clearCtx(){ document.getElementById("context").innerHTML=""; }

function saveEntry(){
  const proj=document.getElementById("project").value.trim();
  const ctx=getCtx();
  const ctxText=document.getElementById("context").innerText.trim();
  if(!proj){alert("Please enter a project name.");return;}
  if(!ctxText){alert("Please enter the context / notes.");return;}
  const item={
    id:editId||Date.now(),
    project:proj,
    status:document.getElementById("status").value,
    context:ctx,
    date:document.getElementById("date").value,
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString()
  };
  if(editId){
    const i=entries.findIndex(x=>x.id===editId);
    item.createdAt=entries[i].createdAt;
    entries[i]=item;
  }else{
    entries.unshift(item);
  }
  editId=null;
  document.getElementById("saveBtn").textContent="Save Activity";
  document.getElementById("project").value="";
  clearCtx();
  document.getElementById("status").value="In Progress";
  document.getElementById("date").value=nowLocal();
  saveStore();
  render();
}

function editEntry(id){
  const e=entries.find(x=>x.id===id);
  document.getElementById("project").value=e.project;
  document.getElementById("status").value=e.status;
  setCtx(e.context||e.activity||"");
  document.getElementById("date").value=e.date;
  editId=id;
  document.getElementById("saveBtn").textContent="Update Activity";
  window.scrollTo({top:0,behavior:"smooth"});
}

function delEntry(id){
  if(!confirm("Delete this entry?")) return;
  entries=entries.filter(x=>x.id!==id);
  saveStore();
  render();
}

function openLightbox(src){
  document.getElementById("lbImg").src=src;
  document.getElementById("lightbox").classList.add("show");
}

function render(){
  document.getElementById("rows").innerHTML=entries.map(e=>{
    const st=STATUS_STYLE[e.status]||"background:#22263a;color:#8b90a8";
    // Make images in preview clickable for lightbox
    const preview=(e.context||e.activity||"").replace(/<img /g,'<img onclick="openLightbox(this.src)" ');
    return `<tr>
      <td>${esc(e.project)}</td>
      <td><span class="badge" style="${st}">${esc(e.status)}</span></td>
      <td style="white-space:nowrap;font-size:12px;color:#8b90a8">${fmt(e.date)}</td>
      <td><div class="rich-preview">${preview}</div></td>
      <td style="white-space:nowrap">
        <button onclick="editEntry(${e.id})">✏️ Edit</button>
        <button onclick="delEntry(${e.id})" style="color:#e05c5c">🗑 Del</button>
      </td>
    </tr>`;
  }).join("");
  const inprog=entries.filter(e=>e.status==="In Progress").length;
  const done=entries.filter(e=>e.status==="Done").length;
  const pending=entries.filter(e=>e.status==="Pending").length;
  const hold=entries.filter(e=>e.status==="Hold").length;
  document.getElementById("stats").innerHTML=
    `<span>Total <b>${entries.length}</b></span>`+
    `<span>In Progress <b style="color:#7fa8f8">${inprog}</b></span>`+
    `<span>Pending <b style="color:#e0b84a">${pending}</b></span>`+
    `<span>Done <b style="color:#3dba8c">${done}</b></span>`+
    `<span>Hold/Cancelled <b style="color:#e06060">${hold}</b></span>`;
}

function esc(s){
  return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function nowLocal(){
  const d=new Date();
  return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10);
}

function dl(content,name,mime){
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([content],{type:mime}));
  a.download=name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function stripHtml(html){
  const tmp=document.createElement("div");
  tmp.innerHTML=html;
  return tmp.innerText||tmp.textContent||"";
}

function exportXLSX(){
  if(!entries.length){alert("No entries to export yet.");return;}

  // Build rows as plain text (strip HTML from context)
  const headers=["Date","Project","Status","Context / Notes"];
  const rows=entries.map(e=>[
    e.date,
    e.project,
    e.status,
    stripHtml(e.context||e.activity||"")
  ]);

  // Create worksheet from array of arrays
  const wsData=[headers,...rows];
  const ws=XLSX.utils.aoa_to_sheet(wsData);

  // Auto-fit column widths based on content
  const colWidths=headers.map((_,ci)=>{
    const maxLen=wsData.reduce((max,row)=>{
      const val=row[ci]?String(row[ci]):"";
      // For context column, measure up to 80 chars to avoid huge columns
      const len=ci===3?Math.min(val.length,80):val.length;
      return Math.max(max,len);
    },10);
    return {wch:Math.min(maxLen+4,80)};
  });
  ws["!cols"]=colWidths;

  // Style header row bold (requires cell-level access)
  headers.forEach((_,ci)=>{
    const cellRef=XLSX.utils.encode_cell({r:0,c:ci});
    if(!ws[cellRef]) return;
    ws[cellRef].s={font:{bold:true},fill:{fgColor:{rgb:"22263A"}}};
  });

  // Enable text wrap for context column
  rows.forEach((_,ri)=>{
    const cellRef=XLSX.utils.encode_cell({r:ri+1,c:3});
    if(!ws[cellRef]) return;
    ws[cellRef].s={alignment:{wrapText:true,vertical:"top"}};
  });

  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,"Activity Log");
  XLSX.writeFile(wb,"work-activity-log.xlsx");
}

function exportJSON(){
  if(!entries.length){alert("No entries to backup yet.");return;}
  dl(JSON.stringify({entries,exported:new Date().toISOString()},null,2),
    "work-activity-backup.json","application/json");
}

function importJSON(ev){
  const f=ev.target.files[0];
  if(!f) return;
  const r=new FileReader();
  r.onload=function(e){
    try{
      const d=JSON.parse(e.target.result);
      if(d.entries){entries=d.entries;saveStore();render();alert(`Restored ${entries.length} entries.`);}
      else{alert("Invalid backup file.");}
    }catch(err){alert("Could not read file.");}
  };
  r.readAsText(f);
  ev.target.value="";
}

document.getElementById("date").value=nowLocal();
render();
