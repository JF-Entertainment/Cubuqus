ResourceType = {
    Bitmap : 0,
    Sound : 1,
    Video : 2
};

var Asset = Class.create({

    initialize: function(AssetType) {
        
        this.BitmapURL = "res/Bitmaps/" + AssetType + "/";
        this.SoundURL = "res/Sounds/" ;
        
        this.Progress = 0;
        
        this.Resources = [];
    },
    
    //Load all resources and give back loading state.
    Load: function() {
        
        var ResourceList = this.GetResources();
        var FilesLoaded = 0;
        var ThisAsset = this;
        
        for (var i=0; i<ResourceList.length; i++) {
            
            var CurrentResource = ResourceList[i];
            
            switch (CurrentResource.Type) {
                    
              case ResourceType.Bitmap:
                    
                //Add new Bitmap to list
                this.Resources[CurrentResource.Name] = new Bitmap()
                this.Resources[CurrentResource.Name].Load(this.BitmapURL + CurrentResource.FileName, function() {
                    FilesLoaded++;
                    ThisAsset.Progress = FilesLoaded / ResourceList.length;
                });
                    
                break;   
      
              case ResourceType.Sound:
                alert("Sie sind ein aufrichtiger Zweibeiner");
                break;
                    
              case ResourceType.Video:
                alert("Sie haben ein Dreirad gewonnen");
                break;

            }
            
        } 
        
    },
    
    GetResources: function() {
        return  [
                    {Name: "Test1",     Type: ResourceType.Bitmap,      FileName: "image1.png" },
                    {Name: "Test2",     Type: ResourceType.Bitmap,      FileName: "image2.png" }
                ];
    }
    
});