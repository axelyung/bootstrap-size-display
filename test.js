let cdnLinks = [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.css', // 0
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.css', // 1
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.css', // 2
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.css', // 3
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css', // 4
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css', // 5
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.css', // 6
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.css', // 7
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.css', // 8
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.css', // 9
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.css', // 10
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.css', // 11
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.css', // 12
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.css', // 13
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.css', // 14
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.css', // 15
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css', // 16
];

function test(index) {
    if (typeof index === 'undefined') {
        throw new Error('No index given!');
    } else if (typeof index !== 'number') {
        throw new Error('The index must be a number');
    } else if (index < 0 || index > cdnLinks.length - 1) {
        throw new Error('The index is out of range');
    }
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cdnLinks[index];
    link.media = 'all';
    head.appendChild(link);
}

test(3);

