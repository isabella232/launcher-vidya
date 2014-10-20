var Launcher = {
    CreateFairy: function(game) {
        
        var fairy = game.add.sprite(game.world.centerX, game.world.height - 120, 'butterflies');
        
        /* tamano escala */
        fairy.scale.setTo(2,2);
        
        /* Red Buttlerfly */
        fairy.animations.add('idle', [0, 1, 2], 12, true);
        
        /* Yellow Butterfly */
        fairy.animations.add('idle', [3, 4, 5], 12, true);
        
        /* Brown Butterfly */
        fairy.animations.add('idle', [6, 7, 8], 12, true);
        
        /* Pink Butterfly */
        fairy.animations.add('idle', [9, 10, 11], 12, true);
        
        
        // Animaciones
        fairy.animations.play('idle');
        
        
        return fairy;
    }
};