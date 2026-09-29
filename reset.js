// Batas hari Jessy's Journal: pukul 12:00 waktu lokal.
// Sebelum jam 12:00, aplikasi menganggapnya masih hari sistem sebelumnya.
(function(){
  const NativeDate=window.Date;
  const originalNow=NativeDate.now.bind(NativeDate);
  function shiftedNow(){
    const d=new NativeDate(originalNow());
    if(d.getHours()<12)d.setDate(d.getDate()-1);
    return d.getTime();
  }
  function ShiftedDate(...args){
    if(!(this instanceof ShiftedDate)) return new NativeDate(...args).toString();
    if(args.length===0){
      const d=new NativeDate(originalNow());
      if(d.getHours()<12)d.setDate(d.getDate()-1);
      return d;
    }
    return new NativeDate(...args);
  }
  ShiftedDate.now=shiftedNow;
  ShiftedDate.parse=NativeDate.parse;
  ShiftedDate.UTC=NativeDate.UTC;
  ShiftedDate.prototype=NativeDate.prototype;
  window.Date=ShiftedDate;
})();