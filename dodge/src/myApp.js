/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var MyLayer = cc.Layer.extend({
    isMouseDown:false,
    helloImg:null,
    helloLabel:null,
    circle:null,
    sprite:null,

    init:function () {

        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask director the window size
        var size = cc.Director.getInstance().getWinSize();

        // add a "close" icon to exit the progress. it's an autorelease object
        /*
        var closeItem = cc.MenuItemImage.create(
            "res/CloseNormal.png",
            "res/CloseSelected.png",
            function () {
                history.go(-1);
            },this);
        closeItem.setAnchorPoint(cc.p(0.5, 0.5));

        var menu = cc.Menu.create(closeItem, null);
        menu.setPosition(cc.PointZero());
        this.addChild(menu, 1);
        closeItem.setPosition(cc.p(size.width - 20, 20));
        */
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        this.titleLabel = cc.LabelTTF.create("DODGE v0.1", "Impact", 38);
        this.titleDesc_1 = cc.LabelTTF.create("2013-06-04", "Arial", 20);
        
        this.titleLabel.setPosition(cc.p(size.width / 2, size.height - 40));
        this.titleDesc_1.setPosition(cc.p(size.width/2, size.height - 80));
        
        this.addChild(this.titleLabel);
        this.addChild(this.titleDesc_1);
        
        
        // BUTTON
        var startButton = cc.MenuItemImage.create(
        	"res/CloseNormal.png",
        	"res/CloseSelected.png",
            function () {
                var scene1 = cc.Scene.create();
                var layer1 = new  GameLayer();
                layer1.init();
                scene1.addChild(layer1);
                var transition = cc.TransitionCrossFade.create(0.5,scene1);
                cc.Director.getInstance().replaceScene(transition);        		
        		/*
        		var sceneGame = cc.Scene.extend({
        			
        		    onEnter:function () {
        		    	alert('gg');
        		        this._super();
        		        var layer_2 = new GameLayer();
        		        this.addChild(layer_2);
        		        layer.init();
        		        director.replaceScene(this);
        		       
        		    }
        		});
        		*/        		
        		/*
        		var TransitionsTestScene = cc.Scene.extend({
        		    runThisTest:function () {
        		    	alert('gg');
        		        var layer = new GameLayer();
        		        this.addChild(layer);
        		        director.replaceScene(this);
        		    }
        		});         		
        		*/
        		/*
        		var sceneGame = cc.Scene.extend();
        		var layerGame = new GameLayer();
        		sceneGame.addChild(layerGame);
        		*/
      		    /*
        		var arrayOfTransitionsTest = [
        		                              {title:"JumpZoomTransition", transitionFunc:function (t, sceneGame) {
        		                                  return new JumpZoomTransition(t, sceneGame);
        		                              }}];
        		*/
        		//director.replaceScene(sceneGame);
            },this);
        startButton.setAnchorPoint(cc.p(0.5, 0.5));
        var menu = cc.Menu.create(startButton, null);
        menu.setPosition(cc.PointZero());
        menu.setScale(2);
        this.addChild(menu);
        startButton.setPosition(cc.p(size.width /2, 250));
        // add "Helloworld" splash screen"
        /*
        this.sprite = cc.Sprite.create("res/HelloWorld.png");
        this.sprite.setAnchorPoint(cc.p(0.5, 0.5));
        this.sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(this.sprite, 0);
        */
        return true;
    }
});

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MyLayer();
        this.addChild(layer);
        layer.init();
    }
});
