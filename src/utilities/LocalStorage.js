const getDonatedItemIds = () => {
    const donatedItemsIds = localStorage.getItem('donatedItemIds');
    if (donatedItemsIds) {
        return JSON.parse(donatedItemsIds);
    }
    return [];
}


const saveDonatedItemIds = (id) => {
    const donatedItemsIds = getDonatedItemIds();
    
    if (!donatedItemsIds.includes(id)) {
        donatedItemsIds.push(id);
        localStorage.setItem('donatedItemIds', JSON.stringify(donatedItemsIds));
        return true
    }
    return false
}


export { getDonatedItemIds, saveDonatedItemIds }