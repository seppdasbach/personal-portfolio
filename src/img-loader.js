const featuredCtx = require.context('../Images/Featured/', true, /\.jpg$/);
const lifestyleCtx = require.context('../Images/Lifestyle/', true, /\.jpg$/);
const outdoorsCtx = require.context('../Images/Outdoors-Adventure/', true, /\.jpg$/);

const imgs = [
    {
        key: 'featured',
        context: featuredCtx
    },
    {
        key: 'lifestyle',
        context: lifestyleCtx
    },
    {
        key: 'outdoors',
        context: outdoorsCtx
    }
];

const imageMap = imgs.map((configObj) => {
    configObj.context = configObj.context.keys().reduce((accum, key) => (
        [...accum, configObj.context(key) ]
    ), []);
    return configObj;
}).reduce((accum, { key, context }) => {
    accum[key] = context;
    return accum;
}, {});


export default imageMap;
