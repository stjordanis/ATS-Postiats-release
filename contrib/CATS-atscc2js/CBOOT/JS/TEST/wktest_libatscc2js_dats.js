/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2016-12-27: 17h:12m
**
*/

/* ATSextcode_beg() */
//
function
ats2js_worker_channeg0_new_file
  (file) { var chn = new Worker(file); return chn; }
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
ats2js_worker_channeg0_close(chn) { return chn.terminate(); }
function
ats2js_worker_channeg1_close(chn) { return chn.terminate(); }
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
ats2js_worker_channeg0_send(chn, k0)
{
  chn.onmessage =
  function(event)
    { return ats2jspre_cloref2_app(k0, chn, event.data); };
  return/*void*/;
}
function
ats2js_worker_channeg0_recv(chn, x0, k0)
{
  chn.postMessage(x0); return ats2jspre_cloref1_app(k0, chn);
}
//
function
ats2js_worker_channeg1_send
  (chn, k0)
{
  return ats2js_worker_channeg0_send(chn, k0);
}
function
ats2js_worker_channeg1_recv
  (chn, x0, k0)
{
  return ats2js_worker_channeg0_recv(chn, x0, k0);
}
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
theExample_dats_c_get_value()
{
  return document.getElementById("theExample_dats_c").value;
}
function
theExample_dats_js_set_value(code)
{
  return document.getElementById("theExample_dats_js").value = code;
}
//
function
theExample_atscc2js_optstr_get_value()
{
  return document.getElementById("theExample_atscc2js_optstr").value;
}
//
/* ATSextcode_end() */

function
__patsfun_34__closurerize(env0, env1)
{
  return [function(cenv, arg0, arg1) { return __patsfun_34(cenv[1], cenv[2], arg0, arg1); }, env0, env1];
}


function
__patsfun_35__closurerize(env0)
{
  return [function(cenv, arg0) { return __patsfun_35(cenv[1], arg0); }, env0];
}


function
__patsfun_36__closurerize(env0)
{
  return [function(cenv, arg0, arg1) { return __patsfun_36(cenv[1], arg0, arg1); }, env0];
}


function
__patsfun_45__closurerize()
{
  return [function(cenv, arg0) { return __patsfun_45(arg0); }];
}


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_projects_057_MEDIUM_057_CATS_055_atsccomp_057_CATS_055_atscc2js_057_CBOOT_057_JS_057_TEST_057_wktest_libatscc2js_056_dats__theExample_atscc2js_getarg()
{
//
// knd = 0
  var tmpret52
  var tmp53
  var tmp54
  var tmp55
  var tmp56
  var tmp57
  var tmp58
  var tmp65
  var tmplab, tmplab_js
//
  // __patsflab_theExample_atscc2js_getarg
  tmp53 = null;
  tmp55 = theExample_dats_c_get_value();
  tmp54 = [1, tmp55];
  tmp56 = [tmp54, tmp53];
  tmp57 = theExample_atscc2js_optstr_get_value();
  tmp58 = tmp57.split(" ");
  tmp65 = ats2jspre_JSarray_length(tmp58);
  tmpret52 = aux_32(tmp58, tmp65, tmp56);
  return tmpret52;
} // end-of-function


function
aux_32(env0, arg0, arg1)
{
//
// knd = 1
  var apy0
  var apy1
  var tmpret59
  var tmp60
  var tmp61
  var tmp62
  var tmp63
  var tmp64
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_aux_32
    tmp60 = ats2jspre_gt_int0_int0(arg0, 0);
    if(tmp60) {
      tmp61 = ats2jspre_sub_int0_int0(arg0, 1);
      tmp63 = ats2jspre_JSarray_get_at(env0, tmp61);
      tmp62 = [0, tmp63];
      tmp64 = [tmp62, arg1];
      // ATStailcalseq_beg
      apy0 = tmp61;
      apy1 = tmp64;
      arg0 = apy0;
      arg1 = apy1;
      funlab_js = 1; // __patsflab_aux_32
      // ATStailcalseq_end
    } else {
      tmpret59 = arg1;
    } // endif
    if (funlab_js > 0) continue; else return tmpret59;
  } // endwhile-fun
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_projects_057_MEDIUM_057_CATS_055_atsccomp_057_CATS_055_atscc2js_057_CBOOT_057_JS_057_TEST_057_wktest_libatscc2js_056_dats__theExample_atscc2js_arglst(arg0, arg1)
{
//
// knd = 0
  var tmp67
  var tmplab, tmplab_js
//
  // __patsflab_theExample_atscc2js_arglst
  tmp67 = ats2js_worker_channeg0_new_file("./libatscc2js_ext_worker.js");
  ats2js_worker_channeg0_send(tmp67, __patsfun_34__closurerize(arg0, arg1));
  return/*_void*/;
} // end-of-function


function
__patsfun_34(env0, env1, arg0, arg1)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_34
  ats2js_worker_channeg0_recv(arg0, env0, __patsfun_35__closurerize(env1));
  return/*_void*/;
} // end-of-function


function
__patsfun_35(env0, arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_35
  ats2js_worker_channeg0_send(arg0, __patsfun_36__closurerize(env0));
  return/*_void*/;
} // end-of-function


function
__patsfun_36(env0, arg0, arg1)
{
//
// knd = 0
  var tmp71
  var tmp85
  var tmp86
  var tmp87
  var tmp89
  var tmp91
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_36
  tmp71 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__30__1(arg1);
  ats2js_worker_channeg0_close(arg0);
  tmp85 = tmp71[0];
  tmp86 = tmp71[1];
  tmp87 = tmp71[2];
  tmp89 = ats2jspre_eq_int0_int0(tmp85, 0);
  if(tmp89) {
    theExample_dats_js_set_value(tmp86);
  } else {
    // ATSINSmove_void
  } // endif
  tmp91 = ats2jspre_gt_int0_int0(tmp85, 0);
  if(tmp91) {
    theExample_dats_js_set_value(tmp87);
  } else {
    // ATSINSmove_void
  } // endif
  env0[0](env0, tmp85);
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__30__1(arg0)
{
//
// knd = 0
  var tmpret45__1
  var tmp46__1
  var tmp47__1
  var tmp48__1
  var tmp49__1
  var tmp50__1
  var tmp51__1
  var tmplab, tmplab_js
//
  // __patsflab_chmsg_parse
  tmp46__1 = arg0[0];
  tmp47__1 = arg0[1];
  tmp48__1 = arg0[2];
  tmp49__1 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__38__1(tmp46__1);
  tmp50__1 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__40__1(tmp47__1);
  tmp51__1 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__40__2(tmp48__1);
  tmpret45__1 = [tmp49__1, tmp50__1, tmp51__1];
  return tmpret45__1;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__38__1(arg0)
{
//
// knd = 0
  var tmpret79__1
  var tmplab, tmplab_js
//
  // __patsflab_chmsg_parse
  tmpret79__1 = parseInt(arg0);
  return tmpret79__1;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__40__1(arg0)
{
//
// knd = 0
  var tmpret81__1
  var tmplab, tmplab_js
//
  // __patsflab_chmsg_parse
  tmpret81__1 = arg0;
  return tmpret81__1;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__40__2(arg0)
{
//
// knd = 0
  var tmpret81__2
  var tmplab, tmplab_js
//
  // __patsflab_chmsg_parse
  tmpret81__2 = arg0;
  return tmpret81__2;
} // end-of-function


function
theExample_atscc2js_onclick()
{
//
// knd = 0
  var tmp93
  var tmplab, tmplab_js
//
  // __patsflab_theExample_atscc2js_onclick
  tmp93 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_projects_057_MEDIUM_057_CATS_055_atsccomp_057_CATS_055_atscc2js_057_CBOOT_057_JS_057_TEST_057_wktest_libatscc2js_056_dats__theExample_atscc2js_getarg();
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_projects_057_MEDIUM_057_CATS_055_atsccomp_057_CATS_055_atscc2js_057_CBOOT_057_JS_057_TEST_057_wktest_libatscc2js_056_dats__theExample_atscc2js_arglst(tmp93, __patsfun_45__closurerize());
  return/*_void*/;
} // end-of-function


function
fpost_44(arg0)
{
//
// knd = 0
  var tmp95
  var tmplab, tmplab_js
//
  // __patsflab_fpost_44
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab18
      if(!ATSCKpat_int(arg0, 0)) { tmplab_js = 3; break; }
      case 2: // __atstmplab19
      ats2jspre_alert("Atscc2js finished normally!");
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab20
      if(!ATSCKpat_int(arg0, 1)) { tmplab_js = 5; break; }
      case 4: // __atstmplab21
      ats2jspre_alert("Atscc2js encountered an error!");
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 5: // __atstmplab22
      tmp95 = ats2jspre_gte_int0_int0(arg0, 2);
      if(!ATSCKpat_bool(tmp95, true)) { tmplab_js = 6; break; }
      ats2jspre_alert("Atscc2js encountered some errors!");
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 6: // __atstmplab23
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
__patsfun_45(arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_45
  fpost_44(arg0);
  return/*_void*/;
} // end-of-function

// dynloadflag_minit
var _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_projects_057_MEDIUM_057_CATS_055_atsccomp_057_CATS_055_atscc2js_057_CBOOT_057_JS_057_TEST_057_wktest_libatscc2js_056_dats__dynloadflag = 0;

function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_projects_057_MEDIUM_057_CATS_055_atsccomp_057_CATS_055_atscc2js_057_CBOOT_057_JS_057_TEST_057_wktest_libatscc2js_056_dats__dynload()
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // ATSdynload()
  // ATSdynloadflag_sta(_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_projects_057_MEDIUM_057_CATS_055_atsccomp_057_CATS_055_atscc2js_057_CBOOT_057_JS_057_TEST_057_wktest_libatscc2js_056_dats__dynloadflag(125))
  if(ATSCKiseqz(_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_projects_057_MEDIUM_057_CATS_055_atsccomp_057_CATS_055_atscc2js_057_CBOOT_057_JS_057_TEST_057_wktest_libatscc2js_056_dats__dynloadflag)) {
    _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_projects_057_MEDIUM_057_CATS_055_atsccomp_057_CATS_055_atscc2js_057_CBOOT_057_JS_057_TEST_057_wktest_libatscc2js_056_dats__dynloadflag = 1 ; // flag is set
  } // endif
  return/*_void*/;
} // end-of-function


function
test_libatscc2js_dynload()
{
//
// knd = 0
  var tmplab, tmplab_js
//
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_projects_057_MEDIUM_057_CATS_055_atsccomp_057_CATS_055_atscc2js_057_CBOOT_057_JS_057_TEST_057_wktest_libatscc2js_056_dats__dynload();
  return/*_void*/;
} // end-of-function


/* ATSextcode_beg() */
//
function
the_libatscc2js_main()
{
  jQuery(document).ready(function(){test_libatscc2js_dynload();});
}
//
/* ATSextcode_end() */

/* ****** ****** */

/* end-of-compilation-unit */