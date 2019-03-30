//export the substitution boxes needed for the des mechanism
//can be any no of s-boxes
//minimum no of s-boxes is 1
//when deciding the s-box to choose we mod it by the no of s-box by k
//where k stands for the no of s-boxes exported from this file

//s-box is a 2-dimensional array of size NxN
//containing unique integers in the range 1 to N*N

//when exporting the s-box we export a 3d array containing all the s-boxes

module.exports = [];
