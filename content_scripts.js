const getParams = (filed) => {
    const urlObject = new URL(location.href);
    return urlObject.searchParams.get(filed);
}
location.href = getParams('target') || getParams('url');
