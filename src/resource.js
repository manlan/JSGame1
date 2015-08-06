var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    
    di_bt_icon_1_png:"res/plist/di_bt_icon_1.png",
    di_bt_icon_2_png:"res/plist/di_bt_icon_2.png",
    di_bt_icon_3_png:"res/plist/di_bt_icon_3.png",
    di_bt_icon_4_png:"res/plist/di_bt_icon_4.png",
    di_bt_icon_5_png:"res/plist/di_bt_icon_5.png",
    
    dpsg_png:"res/dpsg.png",
    dpsg_plist:"res/dpsg.plist",
};

var g_resources = [
              res.dpsg_png,
              res.dpsg_plist
              ];

for (var i in res) {
    g_resources.push(res[i]);
}