export function groupItemsByPrice(items, type) {
    return items
        ?.filter((item) => item.type === type)
        .reduce((groups, item) => {
            const price = item.price;
            if (!groups[price]) groups[price] = [];
            groups[price].push(item);
            return groups;
        }, {});
}
