// block type definitions for Minecraft blocks
// Block Types: air, stone, dirt, grass, log, leaves, sand, water, lava, ores

const BlockTypes = {
    AIR: 'air',
    STONE: 'stone',
    DIRT: 'dirt',
    GRASS: 'grass',
    LOG: 'log',
    LEAVES: 'leaves',
    SAND: 'sand',
    WATER: 'water',
    LAVA: 'lava',
    ORE: 'ore'
};

// Block textures mapping
const BlockTextures = {
    [BlockTypes.AIR]: 'transparent',
    [BlockTypes.STONE]: 'textures/stone.png',
    [BlockTypes.DIRT]: 'textures/dirt.png',
    [BlockTypes.GRASS]: 'textures/grass.png',
    [BlockTypes.LOG]: 'textures/log.png',
    [BlockTypes.LEAVES]: 'textures/leaves.png',
    [BlockTypes.SAND]: 'textures/sand.png',
    [BlockTypes.WATER]: 'textures/water.png',
    [BlockTypes.LAVA]: 'textures/lava.png',
    [BlockTypes.ORE]: 'textures/ore.png'
};

// Block property methods
const BlockProperties = {
    getBlockTexture: function(blockType) {
        return BlockTextures[blockType] || 'unknown';
    },
    isSolid: function(blockType) {
        return blockType !== BlockTypes.AIR && blockType !== BlockTypes.WATER;
    },
    isLiquid: function(blockType) {
        return blockType === BlockTypes.WATER || blockType === BlockTypes.LAVA;
    }
};

export { BlockTypes, BlockTextures, BlockProperties };