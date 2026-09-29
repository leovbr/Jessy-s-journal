// Jessy's Journal: system day resets exactly at 12:00 local time.
(function(){
  const NativeDate=window.Date;
  const originalNow=NativeDate.now.bind(NativeDate);
  function shiftedNow(){const d=new NativeDate(originalNow());if(d.getHours()<12)d.setDate(d.getDate()-1);return d.getTime()}
  function SystemDate(...args){if(!(this instanceof SystemDate))return new NativeDate(...args).toString();if(args.length===0){const d=new NativeDate(originalNow());if(d.getHours()<12)d.setDate(d.getDate()-1);return d}return new NativeDate(...args)}
  SystemDate.now=shiftedNow;SystemDate.parse=NativeDate.parse;SystemDate.UTC=NativeDate.UTC;SystemDate.prototype=NativeDate.prototype;window.Date=SystemDate;
})();