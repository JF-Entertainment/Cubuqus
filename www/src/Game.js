var Game = Class.create({
	
	initialize: function (canvas) {
		
		//Initializing global variables
		this.Version = "0.1";
		this.Canvas = canvas;
		
        this.CurrentAsset = new Asset("HighRes");
		
		this.SceneMgr = new SceneManager();
        //Ratio of screen
        this.Ratio = 1;
	},
	
	Load: function (){
		
        //Recalculate Size
        this.onResize();
        
        //Loading Textures
        this.CurrentAsset.Load();
        
		//Add loading-scene
		this.SceneMgr.Set( new WelcomeScene() );
		
	},
		
	Tick: function (elapsed) {
		

        //Tick SceneManager
        this.SceneMgr.Tick(elapsed);
	    
        //Draw
        this.Draw( this.Canvas.getContext("2d") );
        
	},
		
	
	Draw: function (Context) {

        //Create new Graphics
        var ContextGraphics = new Graphics(this.Canvas.width, this.Canvas.height)

        this.SceneMgr.Draw( ContextGraphics );
        
        //Set context
       	Context = ContextGraphics.GetContext( Context );
        
	},
    
    onResize: function () {

        //Resize Canvas


        //Recalculate Ratio
        this.Ratio = this.Canvas.width / 1280;

        //Call Resize-Event
        this.SceneMgr.onResize();

    }


});