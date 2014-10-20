var Launcher = {
    CreateFairy: function(game, altura, fairyGroup) {

        /* X Position random */
        var xPosition = Math.floor(Math.random() * 496)+10;

        var fairy = game.add.sprite(
                    xPosition,
                    altura,
                    'butterflies'
        );

        /* tamano escala */
        fairy.scale.setTo(2,2);

        /* Random Color */
        var spriteSelect = Math.floor(Math.random() * 4);
        switch(spriteSelect){
            case 0: /* Red Buttlerfly */
                fairy.animations.add('idle', [0, 1, 2], 12, true);
                break;
            case 1: /* Yellow Butterfly */
                fairy.animations.add('idle', [3, 4, 5], 12, true);
                break;
            case 2: /* Brown Butterfly */
                fairy.animations.add('idle', [6, 7, 8], 12, true);
                break;
            case 3: /* Pink Butterfly */
                fairy.animations.add('idle', [9, 10, 11], 12, true);
                break;
        }

        // Animaciones
        fairy.animations.play('idle');

        // Agregar al grupo
        fairyGroup.add(fairy);
    }
};