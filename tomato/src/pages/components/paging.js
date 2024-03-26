const paging = () => (list, pageNum, size) => {
    const start = size * (pageNum - 1);
    const end = pageNum * size;
    return list.slice(start, end);
}

export {paging};