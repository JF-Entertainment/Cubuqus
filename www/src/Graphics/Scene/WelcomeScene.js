var WelcomeScene = Class.create(BaseScene, {
    
    initialize: function($super) {
        $super();
        
        this.CurrentLoadingScreen = new LoadingScreen( "Loading..." );
      
        this.Screens = [ this.CurrentLoadingScreen ];
    },
    
    Tick: function ($super, elapsed) {
        
        //Invalidate Progress
        this.CurrentLoadingScreen.Progress = Cubuqus.CurrentAsset.Progress;
        
        //Check, if all resources are loaded
        if (Cubuqus.CurrentAsset.Progress == 1) Cubuqus.SceneMgr.Set( new MenuScene() );
 
        $super(elapsed);
        
    }
    
    
});