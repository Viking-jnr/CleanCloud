const images = import.meta.glob('../assets/Images/*.{png, jpg, jpeg, svg}', { eager: true});

const imageMap = {};
for (const path in images) {
    const key = path.split('/').pop().split('.')[0];
    imageMap[key] = images[path].default;
}


export const getImage = (name) => {
    return imageMap[name] || null;
}