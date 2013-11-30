var Font = Class.create({
    
    initialize: function (FontFamily, FontSize, Bold) {
        
        if (! Bold) Bold = false;
        this.Bold = Bold;
        
        this.Family = FontFamily;
        this.Size = FontSize;
    
    }

});