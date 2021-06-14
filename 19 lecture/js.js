let teststring="მე  მომავალი პროგრამისტი ვარ!"

// სიგრძე
console.log(teststring.length)

// ჩვენება თუ მერამდენე სიმბოლოდან იწყება "მომავალი".
console.log(teststring.indexOf('მომავალი'))



// დავტოვოთ სიტყვა "პროგრამისტი"
console.log(teststring.slice(13, 24))


// ჩავანაცვლოთ სიტყვა პროგრამისტი სიტყვით "(მე უკვე პროგრამისტი ვარ)"
console.log(teststring.replace("პროგრამისტი", "(მე უკვე პროგრამისტი ვარ)"))