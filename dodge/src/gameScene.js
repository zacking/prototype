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

var GameLayer = cc.Layer.extend({


    init:function () {
        this._super();
        var size = cc.Director.getInstance().getWinSize();

        this.titleLabel = cc.LabelTTF.create("DODGE11 v0.2", "Impact", 38);
        this.titleDesc_1 = cc.LabelTTF.create("2013-06-03", "Arial", 20);
        
        this.titleLabel.setPosition(cc.p(size.width / 2, size.height - 40));
        this.titleDesc_1.setPosition(cc.p(size.width/2, size.height - 80));
        
        this.addChild(this.titleLabel);
        this.addChild(this.titleDesc_1);

    	//var meteor_img = cc.Sprite.create("res/meteor.png");
    	//meteor_img.setPosition(cc.p(100,100));        
        //var meteo = fMeteo();
        //this.addChild(this.meteor_img);
        
        return true;
    }
});
/*
var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
        layer.init();
    }
});
*/