function handleLikePost(step) {
  let likeCount = 0;
  return function addLIke() {
    likeCount += step;
    return likeCount;  
  }
}

const doubleLike = handleLikePost(2);

console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());