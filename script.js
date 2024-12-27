function heroAnim(){

    gsap.registerPlugin(ScrollTrigger);
    
    
    
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    
    const pc1 = [
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00000_kvfxkv.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00001_lnzkth.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00002_qxaksl.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00003_ysb1xx.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00004_ukqzvb.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00005_dickmz.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00006_gyhgrh.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00007_tws9gc.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00008_sdgwjr.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00009_tn0hwe.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00010_hcnb3j.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00011_u0vd0d.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00012_ac98st.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00013_fljkf4.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00014_zcnmwm.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00015_vzo2q5.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00016_xsr8i2.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00017_sk4jtu.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00018_flm8oh.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00019_zcr2rl.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00020_xjytvc.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00021_frivf8.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00022_usukdu.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00023_ydcsar.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00024_equtxu.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00025_khuxlq.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00026_q4qla6.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00027_auyihx.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00028_tcsat9.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00029_khhvg1.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00030_zkp8ij.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00031_el0lcl.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00032_owlao7.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00033_vmeuh4.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00034_e1vamb.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00035_hlbsl3.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00036_andqjc.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00037_x9nk0r.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00038_bemvva.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00039_bwmbml.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00040_mzis9n.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00041_iv0w2t.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00042_nvgien.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00043_rm8w0p.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00044_h7ayhi.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00045_ugmtva.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00046_tbxwvm.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00047_jxvzs4.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00048_c5mhrc.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00049_xutgjr.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00050_x3eqlk.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00051_t3fmxh.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00052_qcjpv2.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00053_p38fyc.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00054_wweakr.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00055_htryzc.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00056_dg8jxb.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00057_vvvktc.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00058_kztpmc.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00059_lcashh.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00060_okefxy.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00061_t9aaya.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00062_n252eu.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00063_wlfsx3.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00064_zmcxg9.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00065_w3xhw2.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00066_wi3yij.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00067_jr3i4b.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00068_y60kb7.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00069_r2prip.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00070_brh1rf.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00071_huajbq.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00072_hzl7xr.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00073_l3w2ov.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00074_djumiy.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00075_p3g36b.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00076_jk09sd.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00077_ys2dst.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00078_dpy0e6.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00079_qdegr8.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00080_dpusjc.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00081_dmybqa.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00082_cqdarw.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00083_hfwjvu.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00084_wf9xc1.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00085_zhleaw.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00086_gqq4c0.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00087_qnqmnr.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00088_s7j8ar.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00089_lxx7mi.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00090_jx5fim.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00091_gebfwl.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00092_qqdjrx.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00093_p967hl.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00094_kfiecv.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00095_dyxpkj.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00096_bvujdv.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00097_zpsgne.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00098_o0e2s2.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00099_cs2bgu.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00100_fj7lxn.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00101_ulv0ay.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00102_b5alee.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00103_cn284e.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00104_y6zbvh.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00105_kwhdvw.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00106_fvnbro.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00107_pkvn1x.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00108_atjdfi.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00109_qmeeua.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00110_ryi06j.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00111_drrwi3.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00112_l8163x.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00113_oeclw2.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00114_nvu8km.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00115_bmxhn1.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00116_yopps2.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00117_cy2kcd.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00118_me5fe4.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00119_agsawr.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00120_qmjdxf.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00121_sko0wd.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00122_brnnoo.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00123_yqpslz.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00124_e4dcwk.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00125_gaceva.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00126_coutif.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00127_br0b8k.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00128_m24xcu.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00129_q3pclg.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00130_zq0jky.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00131_iqghrq.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00132_er6duk.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00133_tgx6ti.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00134_llporj.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00135_c2x3bx.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00136_wlzpv4.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00137_kmj5ee.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00138_m84deo.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00139_nshuta.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00140_vudjrq.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00141_mjy75t.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00142_i32it2.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00143_jig7jy.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00144_ngu3if.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00145_veod5z.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00146_ajfpbf.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00147_jyamnu.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00148_xute9r.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00149_dpc17n.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00150_xd79pf.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00151_mtbgqv.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00152_prtgbs.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00153_pzvf23.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00154_web70e.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00155_ecz5zl.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00156_mqtn6w.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00157_pgy7zj.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00158_xqv3ff.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00159_j2q86d.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00160_pzuffv.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00161_xnuy21.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00162_nycia6.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00163_dupwrg.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00164_i3fayc.png",
      "https://res.cloudinary.com/ddczkslbv/image/upload/skullandbanner_00165_vw1cav.png",
    ];
    
    const mob1 = [
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306705/0_a2m67l.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306705/1_uxjylb.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306705/2_aukj76.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306705/3_ie3c0o.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306705/4_zl11u2.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306705/5_ium1qg.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306706/6_zhse32.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306706/7_qzmnfg.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306706/8_cu3cml.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306707/9_pq6h0f.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306708/010_kpqeuq.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306706/011_yud5bb.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306706/012_ymqybc.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306707/013_mwjavj.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306707/014_voukww.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306707/015_iupwye.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306708/016_tnn16w.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306707/017_m2v9dm.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306707/018_oanpq6.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306708/019_kpj40i.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306716/020_gb9kis.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306716/021_fuptot.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306716/022_odcga2.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306721/023_btkuu2.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306721/024_ksh4dq.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306720/025_w72rwn.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306719/026_mjwn4g.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306717/027_hgvc8i.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306718/028_n0wwty.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306725/029_euhyiz.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306715/030_jzx6kz.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306720/031_cmtuuc.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306716/032_tdgcxd.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306715/033_exo31d.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306721/034_hjwxol.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306720/035_zcxr6j.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306715/036_gvbaqf.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306720/037_h8viel.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306716/038_la4hd5.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306724/039_qy2w5h.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735312260/040_hte5wc.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306733/041_fylh9q.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306732/042_wwqjrt.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306732/043_oybql1.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306732/044_byvmkf.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306733/045_ligm2f.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306733/046_s0h7ts.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306733/047_db1ziw.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306735/048_tfmbxd.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306736/049_hmbesb.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306737/050_oeoexc.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306737/051_jxkysi.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306737/052_gkiyzd.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306737/053_iu2dew.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306739/054_wqeqkl.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306740/055_v98uce.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306740/056_bdzkeu.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306741/057_tt0xfa.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306741/058_jfzqfa.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306741/059_fur39m.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306742/060_rlnkyl.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306749/061_layyoa.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306750/062_m6j7sl.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306750/063_wxojil.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306750/064_iba9dm.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306752/065_cszuj9.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306751/066_dq6wv8.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306753/067_f6t5dj.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306753/068_abruk9.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306754/069_lj7is1.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306755/070_e7o1kx.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306755/071_uecgif.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306759/072_cohdba.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306756/073_ljbxfs.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306756/074_tyd1bc.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306759/075_v1yhnl.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306757/076_f0prj1.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306758/077_icbqzw.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306760/078_cfp0bz.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306759/079_hwdkym.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306768/080_y0gqju.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306769/081_qszaxi.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306770/082_xwgauv.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306769/083_ohflyl.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306770/084_lmejii.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306771/085_oswzr2.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306772/086_oa6hyl.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306773/087_wljtm4.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306773/088_hid2my.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306773/089_dmtil1.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306775/090_cztt0k.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306776/091_fyz0yw.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306776/092_ovshyf.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306778/093_rdoyf7.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306778/094_brdrtj.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306786/095_l09nlr.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306787/096_y7kwhp.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306786/097_jcil34.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306791/098_xevqw3.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306794/099_kypaov.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306787/100_p53djg.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306793/101_zhf2se.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306793/102_orbsnz.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306789/103_v3tcmq.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306790/104_atk2kg.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306795/105_gkm4it.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306790/106_i6nzmt.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306797/107_vvvlt6.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306794/108_xlf92a.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306791/109_khx4cg.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306796/110_hrneus.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306803/111_ynglfp.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306803/112_nq8eq3.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306804/113_epnvor.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306804/114_jplsyh.webp",  
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306806/115_go6vxr.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306807/116_nygibz.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306807/117_h9xvqe.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306808/118_h6faon.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306809/119_cclzsh.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306810/120_qujxrm.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306812/121_ubfiqc.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306811/122_uwghqa.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306812/123_ujytan.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306813/124_vtfixm.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306814/125_ozeljk.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306820/126_vrdfu2.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306822/127_exw6yt.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306820/128_cjdubw.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306824/129_o6dq2e.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306829/130_uayaul.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306821/131_ast2jq.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306823/132_gvnwur.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306825/133_hy5otn.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306830/134_swyuif.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306826/135_zy3ipt.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306827/136_fbvupg.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306823/137_v2wapm.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306832/138_tcr6av.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306828/139_xvzynf.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306831/140_yxjpse.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306845/141_u8hwz8.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306844/142_zovmmc.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306845/143_cuxpzg.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306847/144_oq0mar.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306848/145_apwgxp.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306849/146_soziln.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306849/147_jxm5n0.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306851/148_zjaew2.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306852/149_lfvtob.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306853/150_bibms8.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306854/151_knqlqs.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306854/152_isr2id.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306855/153_bcfgqa.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306864/154_lkex64.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306856/155_ktwov3.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306857/156_lqlpef.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306858/157_lz4fee.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306859/158_fmcota.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306860/159_setqfo.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306861/160_tkdnsc.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306862/161_co3h1e.webp",
      "https://res.cloudinary.com/ddczkslbv/image/upload/v1735306863/162_xc5pg1.webp",
    
    ]
    
    
    if (window.innerWidth > 768) {
      const frames = {
        currentIndex: 0,
        maxIndex: pc1.length, // Update maxIndex to match actual number of images
      };
    
    } else {
      const frames = {
        currentIndex: 0,
        maxIndex: mob1.length, // Update maxIndex to match actual number of images
      };
    }
    
    let loaded = 0;
    const images = [];
    
    function preloadImages() {
      const isMobile = window.innerWidth <= 768;
      const imagesToLoad = isMobile ? mob1 : pc1; // Use mob1 for mobile, pc1 otherwise
      let loaded = 0;
      const images = [];
      frames.currentIndex = 0;
    
      imagesToLoad.forEach((imgUrl) => {
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
          loaded++;
          if (loaded === imagesToLoad.length) {
            loadImage(frames.currentIndex);
            startAnimation();
          }
        };
        images.push(img);
      });
    
      // Load the first image once all images are preloaded
      function loadImage(index) {
        if (index < 0 || index >= imagesToLoad.length) return; // Check bounds
        const img = images[index];
    
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX, scaleY);
    
        const newWidth = img.width * scale / 1.2;
        const newHeight = img.height * scale / 1.2;
    
        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;
    
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
    
        frames.currentIndex = index;
      }
    
      // Add resize handler once outside the loadImage function
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        loadImage(frames.currentIndex); // Redraw current image on resize
      };
    
      window.addEventListener('resize', handleResize);
    
      function startAnimation() {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#parent",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            markers: true,
          },
        });
    
        tl.to(frames, {
          currentIndex: imagesToLoad.length - 1, // Match the total number of images
          onUpdate: () => {
            loadImage(Math.floor(frames.currentIndex));
          },
        });
      }
    }
    
    preloadImages();
    
    
    }
    heroAnim();