function BinTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
}

BinTree.prototype.insert = function(){

  if (value < this.left) {
    if(this.left == null) {
    // this is checking to see if the left has a value and if it's null then insert that value to the left
    this.left = new BinTree(value);
    // this is saying that if the left is not empty, then call the insert function again to check the next node to see if it's empty on the left again
  } else {
    this.left.insert(value);
  }
} else if (value > this.value){
  if (this.right == null) {
    this.right = new BinTree(value);

  } else {
    this.right.insert(value);

  }
}
  return this;
};

BinTree.prototype.isLeaf = function(){
return !this.left && !this.right;

};
BinTree.prototype.search = function(){

  if (value == this.value) {
    return true;
  } else if (this.isLeaf()){
      return false;
  };
  if (value > this.value){
    return this.right.search(value);
  }
};


try{
  module.exports = BinTree;
} catch(e){

}
