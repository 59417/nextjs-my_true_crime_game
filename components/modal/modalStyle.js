const contentStyle = {
    content: {
        border: '2px solid',
        height: '300px',
        width: '300px',
        inset: 'auto',
        position: 'relative',
    }
};

const overlayStyle = {
    overlay: { 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 2
    }
};

export const QuitStyle = () => {
    const obj1 = JSON.parse(JSON.stringify(contentStyle));
    const obj2 = JSON.parse(JSON.stringify(overlayStyle));
    const obj = Object.assign(obj1, obj2);
    obj.content.backgroundColor = 'rgb(173, 216, 230)';
    obj.content.borderColor = 'darkblue';
    return obj
};

export const HelpStyle = () => {
    const obj1 = JSON.parse(JSON.stringify(contentStyle));
    const obj2 = JSON.parse(JSON.stringify(overlayStyle));
    const obj = Object.assign(obj1, obj2);
    obj.content.backgroundColor = 'rgb(255, 250, 205)';
    obj.content.borderColor = 'saddlebrown';
    obj.content.height = '400px';
    return obj
};

export const GuideStyle = () => {
    const obj1 = JSON.parse(JSON.stringify(contentStyle));
    const obj2 = JSON.parse(JSON.stringify(overlayStyle));
    const obj = Object.assign(obj1, obj2);
    obj.content.backgroundColor = 'rgb(255, 250, 205)';
    obj.content.borderColor = 'saddlebrown';
    obj.content.height = '400px';
    obj.content.padding = 0;
    return obj
};

export const WrongStyle = () => {
    const obj1 = JSON.parse(JSON.stringify(contentStyle));
    const obj2 = JSON.parse(JSON.stringify(overlayStyle));
    const obj = Object.assign(obj1, obj2);
    obj.content.backgroundColor = 'rgb(172, 172, 172)';
    obj.content.borderColor = 'grey';
    obj.content.height = '600px';
    obj.content.padding = 0;
    obj.overlay.backgroundColor = 'rgba(36, 36, 36, 0.8)';
    return obj
};


