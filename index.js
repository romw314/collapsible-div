window.makeCollapsible = window.makeCollapsibleDiv = (header, body) => {
	body.style.display = 'none';
	body.style['background-color'] = 'gray';
	body.style['margin-top'] = '0';
	header.style['user-select'] = 'none';
	header.style['background-color'] = 'dimgray';
	header.style['color'] = 'black';
	header.style['margin-bottom'] = '0';
	header.addEventListener('click', () => body.style.display = (body.style.display === 'none') ? 'block' : 'none');
	console.log('MCD/MC:macodi', JSON.stringify([JSON.stringify(body), JSON.stringify(header), String(header), String(body)]));
};
