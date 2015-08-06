
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        // add a "close" icon to exit the progress. it's an autorelease object
//        var closeItem = new cc.MenuItemImage(
//            res.CloseNormal_png,
//            res.CloseSelected_png,
//            function () {
//                cc.log("Menu is clicked!");
//            }, this);
//        closeItem.attr({
//            x: size.width - 20,
//            y: 20,
//            anchorX: 0.5,
//            anchorY: 0.5
//        });
//
//        var menu = new cc.Menu(closeItem);
//        menu.x = 0;
//        menu.y = 0;
//        this.addChild(menu, 1);

        /////////////////////////////
        // 3. add your codes below...
//        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
//        helloLabel.x = size.width / 2;
//        helloLabel.y = 0;
//        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
//        this.sprite = new cc.Sprite(res.HelloWorld_png);
//        this.sprite.attr({
//            x: size.width / 2,
//            y: size.height / 2,
//            scale: 0.5,
//            rotation: 180
//        });
//        this.addChild(this.sprite, 0);

//        this.sprite.runAction(
//            cc.sequence(
//                cc.rotateTo(2, 0),
//                cc.scaleTo(2, 1, 1)
//            )
//        );
        
//        helloLabel.runAction(
//            cc.spawn(
//                cc.moveBy(2.5, cc.p(0, size.height - 40)),
//                cc.tintTo(2.5,255,125,0)
//            )
//        );
        
        
        // 加载plist
        cc.spriteFrameCache.addSpriteFrames(res.dpsg_plist, res.dpsg_png);
//        cc.textureCache.addImage(res.dpsg_png);
        
        this.initPlist();
        this.bakeLayer();
        
        this.LayerOut();
        return true;
    },
    
    LayerOut:function() {
    	this.width = 200;
    	this.height = 200;
    	
    	var node = new cc.LayerColor();
    	node.setContentSize(this.width, this.height);
    	node.setColor(cc.color(0, 0, 100, 10));
    	node.attr = ({x:400,y:0, width:this.width, height:this.height, anchorX:0, anchorY:0 });
    	this.addChild(node);
    },
    
    initPlist:function() {
    	cc.log("----------------dpsg.plist-----------");
    	
    	var sp1 = new  cc.Sprite("#di_bt_icon_1.png");
//    	sp1.setAnchorPoint(0, 0);
    	sp1.attr({
    		x: 100,
    		y: 100,
    		AnchorX:0,
    		AnchorY:0
    	})
    	this.addChild(sp1, 2);
    	
    		
    	var sp2 = new  cc.Sprite("#di_bt_icon_4.png");
//  	sp1.setAnchorPoint(0, 0);
    	sp2.attr({
    		x: 200,y: 100,AnchorX:0,AnchorY:0
    	})
    	this.addChild(sp2, 2);
    	
    	var sp3 = new  cc.Sprite("#di_bt_icon_5.png");
//  	sp1.setAnchorPoint(0, 0);
    	sp3.attr({
    		x: 300,
    		y: 100,
    		AnchorX:0,
    		AnchorY:0
    	})
    	this.addChild(sp3, 2);
    	
    	//////
    	var res1 = new  cc.Sprite(res.di_bt_icon_1_png);
//  	sp1.setAnchorPoint(0, 0);
    	res1.attr({
    		x: 100,y: 300,AnchorX:0,AnchorY:0
    	})
    	this.addChild(res1, 2);
    	
    	var res2 = new  cc.Sprite(res.di_bt_icon_3_png);
//  	sp1.setAnchorPoint(0, 0);
    	res2.attr({
    		x: 200,y: 300,AnchorX:0,AnchorY:0
    	})
    	this.addChild(res2, 2);
    	
    	var res3 = new  cc.Sprite(res.di_bt_icon_4_png);
//  	sp1.setAnchorPoint(0, 0);
    	res3.attr({
    		x: 300,y: 300,AnchorX:0,AnchorY:0
    	})
    	this.addChild(res3, 2);
    },
    
    bakeLayer:function() {
    	cc.log("bake");
//    	this.bake();
    },
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

