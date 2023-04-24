const dnaCombinations = [ [2,26,1,16,27,7],
[2,25,15,10,31,8],
[6,13,3,4,7,1],
[2,12,4,9,1,1],
[2,6,1,5,15,1],
[1,4,1,7,6,1],
[1,15,1,11,4,1],
[2,4,4,9,1,1],
[1,6,1,1,1,1],
[1,13,5,3,16,1],
[1,22,13,15,30,9],
[5,6,1,8,14,1],
[6,3,1,10,4,1],
[7,6,7,11,22,1],
[6,7,1,2,3,1],
[4,2,4,2,1,1],
[8,24,14,18,32,10],
[4,6,1,10,2,1],
[1,5,7,3,5,1],
[4,3,3,2,11,1],
[2,13,2,13,7,1],
[2,1,4,7,2,1],
[7,14,3,8,18,1],
[3,6,1,4,13,1],
[5,6,1,1,20,1],
[5,1,4,11,19,1],
[7,5,1,2,1,1],
[2,2,5,13,1,1],
[6,1,1,1,10,1],
[5,2,7,6,8,1],
[1,11,1,7,24,1],
[7,7,2,8,8,1],
[4,12,7,11,9,1],
[4,7,3,13,4,1],
[1,8,5,8,5,1],
[3,3,8,6,1,1],
[7,8,2,4,2,1],
[6,17,1,13,21,1],
[5,2,9,2,19,1],
[7,2,2,7,2,1],
[4,4,6,4,10,1],
[5,10,5,14,4,1],
[1,7,7,9,4,1],
[5,4,3,4,1,1],
[5,7,10,9,4,1],
[5,8,5,8,5,1],
[6,1,2,5,5,1],
[6,7,1,4,9,1],
[1,14,7,3,23,1],
[2,1,5,10,6,1],
[1,7,1,3,4,2],
[1,22,13,5,29,11],
[5,12,4,8,2,1],
[1,1,2,6,8,1],
[5,5,5,10,11,1],
[1,6,1,8,10,1],
[7,18,6,7,1,1],
[4,4,5,6,2,1],
[6,6,2,1,10,1],
[1,12,4,1,1,1],
[1,7,1,8,1,1],
[4,2,3,2,11,1],
[2,2,6,1,6,1],
[2,21,1,5,21,1],
[3,3,5,8,11,1],
[7,11,3,3,16,1],
[7,3,2,7,5,1],
[2,1,10,1,1,1],
[2,23,1,17,28,12],
[5,11,1,9,16,1],
[1,10,4,10,25,1],
[2,3,12,2,4,1],
[5,6,1,7,13,1],
[3,4,11,8,6,1],
[2,5,7,3,3,1],
[6,8,4,3,1,1],
[1,1,3,3,6,1],
[6,8,1,2,3,1],
[4,12,1,7,10,1],
[3,12,1,3,15,1],
[5,2,7,3,15,1],
[7,9,3,11,15,1],
[3,14,1,2,7,1],
[1,3,1,5,8,1],
[7,8,1,2,21,1],
[1,1,7,10,8,1],
[3,9,6,11,5,1],
[7,9,5,6,13,1],
[5,13,2,12,7,1],
[7,13,10,9,23,1],
[5,2,2,6,1,1],
[7,16,5,3,3,1],
[5,7,2,4,1,1],
[3,3,1,1,6,1],
[3,10,7,1,12,1],
[2,12,12,7,6,1],
[4,14,4,10,7,1],
[1,14,1,11,7,1],
[1,9,1,4,4,1],
[3,10,1,8,11,1],
[3,3,2,1,8,1],
[3,4,2,3,13,1],
[2,13,3,12,18,1],
[1,19,3,10,6,1],
[1,12,4,9,10,1],
[1,11,4,2,16,1],
[5,19,2,2,17,1],
[2,1,10,11,1,1],
[5,8,1,9,19,1],
[7,12,7,11,9,1],
[7,5,1,9,4,1],
[6,14,1,13,18,1],
[6,3,9,4,13,1],
[4,11,1,10,7,1],
[6,4,1,7,8,1],
[4,9,2,8,14,1],
[3,13,7,14,23,1],
[2,6,8,1,1,1],
[5,14,1,12,7,1],
[3,7,6,1,3,1],
[1,4,1,8,19,1],
[4,2,3,3,8,1],
[7,4,3,5,5,1],
[1,1,6,14,8,1],
[1,2,1,6,17,1],
[2,4,8,1,3,1],
[2,15,1,13,1,1],
[2,13,5,9,16,1],
[5,2,5,4,11,1],
[1,1,2,1,3,1],
[2,5,4,9,4,1],
[4,4,1,4,19,1],
[4,10,5,7,3,1],
[7,1,5,1,3,1],
[3,8,7,8,6,1],
[6,8,1,11,5,1],
[5,19,2,7,9,3],
[5,18,7,3,10,1],
[1,3,1,3,3,1],
[5,8,1,1,9,1],
[4,15,2,6,2,1],
[2,4,1,12,5,1],
[6,13,1,6,18,1],
[2,5,2,8,4,1],
[1,11,2,4,7,1],
[3,9,3,3,1,1],
[2,9,1,8,4,1],
[6,21,5,3,2,1],
[2,11,6,8,7,1],
[2,10,7,3,25,1],
[3,15,2,1,14,1],
[7,8,5,9,5,1],
[4,9,1,14,1,1],
[7,7,2,3,13,1],
[5,4,9,3,3,1],
[7,7,1,6,1,1],
[1,18,12,4,6,5],
[1,2,6,6,9,1],
[7,12,1,8,25,1],
[4,11,1,9,7,1],
[4,6,1,1,9,1],
[6,6,1,9,21,1],
[7,5,5,1,2,1],
[2,2,1,4,25,1],
[4,6,1,12,1,1],
[6,3,2,1,5,1],
[2,2,3,7,2,1],
[7,2,1,8,5,1],
[7,4,2,2,11,1],
[1,5,1,10,13,1],
[1,4,1,9,6,1],
[3,12,1,1,10,1],
[4,8,1,8,4,1],
[1,9,6,8,3,1],
[3,15,7,3,5,1],
[1,11,1,5,24,1],
[7,13,1,6,18,1],
[4,5,8,1,5,1],
[1,7,6,4,3,1],
[1,3,4,13,9,1],
[4,10,1,3,2,2],
[6,2,10,7,6,1],
[3,13,3,10,7,1],
[5,18,3,3,9,1],
[6,3,1,6,21,1],
[7,1,9,4,5,1],
[3,10,1,7,4,1],
[2,2,1,10,25,1],
[6,6,2,8,19,1],
[1,4,7,8,13,1],
[6,10,1,6,4,1],
[7,2,2,4,8,1],
[3,6,1,9,3,1],
[4,2,2,2,5,1],
[7,5,3,5,10,1],
[6,10,3,1,2,1],
[4,5,1,12,1,1],
[3,1,1,8,1,1],
[7,10,4,9,19,1],
[1,2,4,8,1,1],
[4,14,1,12,18,1],
[1,1,6,9,20,1],
[6,9,1,5,13,1],
[7,8,4,3,3,1],
[4,3,1,8,20,1],
[1,6,1,4,11,1],
[2,3,1,4,2,1],
[1,10,2,1,15,1],
[4,7,1,13,5,1],
[3,20,4,6,8,1],
[7,2,2,4,1,1],
[1,8,4,10,2,1],
[7,16,9,6,9,1],
[6,3,2,5,3,1],
[2,6,2,5,1,1],
[5,10,2,11,1,1],
[1,20,1,5,10,1],
[6,12,3,10,17,1],
[4,20,2,4,22,1],
[5,2,2,3,21,1],
[2,5,1,4,19,1],
[1,11,7,7,16,1],
[3,5,7,14,2,1],
[5,16,6,8,11,1],
[1,5,2,8,19,1],
[2,6,3,5,15,1],
[5,10,1,4,4,1],
[1,6,3,4,2,1],
[4,7,3,2,21,1],
[5,1,1,12,17,1],
[4,8,1,4,1,1],
[3,11,1,8,24,1],
[2,20,1,3,14,1],
[2,13,1,4,7,1],
[5,3,1,3,2,2],
[2,6,4,2,8,1],
[4,11,7,6,24,1],
[4,13,10,2,24,1],
[7,2,12,5,1,1],
[6,9,1,9,21,1],
[4,9,1,7,9,1],
[6,10,2,9,12,1],
[2,3,1,2,8,1],
[3,3,7,4,4,1],
[6,2,1,5,1,1],
[5,3,5,10,6,1],
[7,9,2,3,4,1],
[4,18,3,1,10,1],
[5,1,2,5,17,1],
[5,13,8,6,23,1],
[2,8,2,12,12,1],
[4,8,1,2,2,1],
[6,2,3,1,1,1],
[3,8,2,4,17,1],
[7,17,3,7,21,1],
[6,1,2,6,15,4],
[4,10,2,1,6,1],
[1,13,1,4,18,1],
[5,13,2,4,7,1],
[5,1,2,1,19,1],
[2,8,2,3,1,1],
[4,2,1,11,20,1],
[4,3,2,1,1,1],
[2,9,1,5,2,1],
[2,5,3,3,6,1],
[3,1,8,13,15,1],
[5,4,1,2,17,3],
[6,2,3,13,1,1],
[5,6,2,14,6,1],
[3,4,6,14,14,1],
[2,4,1,5,5,1],
[1,4,4,5,2,1],
[1,6,1,5,11,1],
[3,14,1,6,16,1],
[2,7,11,11,10,1],
[1,20,1,11,9,1],
[2,21,1,4,26,1],
[4,5,4,6,6,1],
[3,15,1,1,14,1],
[5,9,7,1,12,1],
[1,2,2,2,1,1],
[7,3,9,11,9,1],
[1,9,10,10,3,1],
[5,10,8,4,1,1],
[5,6,3,1,8,1],
[2,11,5,4,16,1],
[6,5,1,7,2,1],
[4,1,1,1,10,1],
[5,6,3,13,8,1],
[7,3,8,2,10,1],
[3,3,1,4,3,1],
[2,1,7,2,6,1],
[3,5,10,1,8,1],
[7,9,1,6,15,1],
[1,5,1,3,9,1],
[1,18,2,1,4,1],
[4,13,5,3,16,1],
[4,4,2,6,1,1],
[7,1,6,4,2,1],
[1,1,2,1,5,1],
[2,12,2,8,25,1],
[7,2,2,11,11,3],
[6,13,1,9,18,1],
[3,12,4,12,12,1],
[2,14,12,5,18,1],
[7,5,1,3,2,1],
[7,14,2,2,7,1],
[6,10,9,3,17,1],
[3,7,1,2,1,1],
[7,15,2,2,4,1],
[7,7,2,1,9,1],
[1,4,11,1,8,1],
[3,4,8,4,15,1],
[3,8,8,10,17,1],
[3,2,2,1,2,1],
[6,18,1,9,4,1],
[2,16,1,6,2,1],
[4,7,5,5,13,1],
[7,9,3,3,6,1],
[3,9,1,9,1,1],
[6,3,6,11,11,1],
[2,10,11,3,2,1],
[3,20,1,2,8,1],
[1,9,5,14,3,1],
[2,4,2,2,9,1],
[5,12,1,5,3,1],
[4,11,1,7,18,1],
[5,1,2,9,9,2],
[1,3,3,4,13,1],
[7,10,1,14,4,1],
[6,10,1,1,12,1],
[5,3,7,5,15,1],
[5,7,3,9,1,1],
[1,14,1,9,16,1],
[1,3,3,4,9,1],
[2,11,11,8,7,1],
[5,2,4,5,14,1],
[2,8,9,7,17,1],
[6,7,8,5,20,1],
[5,13,5,13,23,1],
[3,11,4,14,7,1],
[4,6,1,3,2,1],
[2,3,1,3,15,1],
[1,7,2,9,26,1],
[7,4,10,9,1,1],
[2,1,2,7,6,1],
[3,4,1,3,6,1],
[1,11,1,2,7,1],
[4,11,7,3,7,1],
[7,1,2,1,5,1],
[2,3,1,3,6,1],
[6,10,1,2,4,1],
[6,2,11,3,12,1],
[6,19,7,11,25,1],
[4,20,1,13,21,1],
[3,16,6,7,1,1],
[1,5,5,3,1,1],
[6,3,10,3,9,1],
[2,2,1,7,5,1],
[3,1,1,13,1,1],
[2,7,3,14,10,1],
[3,7,1,5,5,2],
[7,5,9,12,9,1],
[3,3,3,7,5,1],
[5,8,2,2,10,1],
[2,3,5,2,19,1],
[5,1,6,11,13,1],
[7,9,1,2,1,1],
[3,7,6,10,2,1],
[4,9,1,3,15,1],
[5,3,1,6,3,1],
[4,11,1,8,16,1],
[4,12,1,3,17,1],
[3,20,11,4,12,3],
[5,13,1,2,7,1],
[3,6,1,4,2,1],
[4,4,4,4,1,1],
[6,10,1,5,8,1],
[2,18,1,2,1,1],
[1,9,4,7,6,1],
[4,17,1,9,12,1],
[3,11,4,14,16,1],
[4,19,5,3,9,1],
[6,12,3,10,20,1],
[1,16,4,14,10,1],
[4,8,8,12,6,1],
[2,12,1,8,1,1],
[7,12,5,7,12,1],
[3,8,2,2,12,1],
[3,15,1,12,2,1],
[4,7,1,4,1,1],
[6,19,1,1,14,1],
[3,6,2,3,15,1],
[6,11,1,2,7,1],
[2,11,1,2,7,1],
[1,4,1,4,2,1],
[5,14,6,10,7,1],
[2,8,2,5,5,1],
[4,18,6,9,2,1],
[1,5,1,1,5,1],
[7,6,2,7,17,1],
[4,9,4,7,14,1],
[1,4,2,12,9,1],
[2,2,4,2,2,1],
[2,13,6,11,16,1],
[5,5,1,3,11,1],
[4,21,2,12,2,1],
[5,12,3,5,10,1],
[7,14,8,5,18,1],
[4,11,5,9,24,1],
[6,4,1,13,14,1],
[6,13,4,3,7,1],
[6,11,4,3,7,1],
[2,1,2,5,1,1],
[2,6,1,4,6,1],
[6,17,1,5,5,1],
[3,9,1,5,25,1],
[3,4,1,1,4,1],
[2,1,7,8,2,1],
[3,7,3,12,19,1],
[5,9,2,13,19,1],
[3,11,11,4,16,1],
[3,9,2,1,10,1],
[4,1,1,2,17,1],
[3,8,2,2,11,1],
[5,14,7,4,16,1],
[6,5,1,6,20,1],
[7,4,4,2,15,1],
[6,8,1,6,4,1],
[3,15,5,12,21,1],
[4,6,7,12,3,1],
[6,3,10,13,8,1],
[7,8,7,1,2,1],
[3,4,5,6,4,1],
[4,11,8,4,7,1],
[3,12,2,3,4,1],
[7,7,1,5,10,2],
[4,2,2,7,11,1],
[4,15,2,7,3,1],
[2,7,1,8,9,4],
[5,4,1,12,1,1],
[7,13,4,9,7,1],
[5,15,1,4,10,1],
[4,4,3,4,1,1],
[2,15,1,2,8,1],
[5,20,3,2,4,1],
[5,14,8,3,7,1],
[4,17,1,14,2,2],
[6,7,7,10,12,1],
[4,3,1,12,2,1],
[3,5,1,6,15,1],
[1,2,3,9,1,1],
[7,11,1,5,23,1],
[7,12,3,13,1,1],
[4,2,3,1,12,1],
[2,19,1,3,1,1],
[3,10,7,5,15,1],
[3,1,5,6,2,1],
[1,9,11,1,10,1],
[5,9,4,7,3,1],
[7,7,6,7,11,1],
[3,19,1,4,3,1],
[3,8,3,10,17,1],
[1,10,6,4,22,1],
[1,1,4,2,14,1],
[1,12,1,4,13,1],
[2,10,11,4,17,1],
[2,14,4,6,16,1],
[5,2,2,1,11,1],
[3,9,7,2,13,1],
[4,12,3,4,1,1],
[6,11,5,5,7,1],
[2,2,5,10,12,1],
[4,10,2,4,2,1],
[1,3,1,1,2,1],
[2,11,2,8,18,1],
[6,4,4,8,3,1],
[4,6,3,8,20,1],
[5,21,1,5,11,1],
[2,3,7,4,6,1],
[6,4,6,2,1,1],
[7,1,8,7,15,1],
[2,13,1,8,18,1],
[2,1,3,2,13,1],
[6,5,4,4,4,1],
[4,2,2,1,2,1],
[1,13,2,11,18,1],
[4,17,3,1,12,1],
[7,9,3,13,9,1],
[3,1,5,2,15,1],
[4,16,1,10,12,1],
[7,9,1,9,12,1],
[2,8,3,7,9,1],
[5,6,2,14,3,1],
[1,12,1,5,19,1],
[5,4,1,3,4,1],
[7,15,6,12,3,1],
[1,1,5,8,2,1],
[5,1,1,1,2,1],
[5,14,1,9,18,1],
[6,17,5,13,15,1],
[5,3,5,11,13,1],
[1,6,5,3,14,1],
[7,2,8,1,2,1],
[2,13,8,5,24,1],
[4,20,3,5,13,1],
[6,5,7,1,10,1],
[2,4,1,8,20,2],
[3,6,2,6,25,1],
[2,6,1,4,2,1],
[6,17,5,6,1,1],
[3,13,2,5,18,1],
[3,12,8,2,3,1],
[6,2,1,2,19,1],
[3,5,1,11,17,1],
[2,18,1,3,4,1],
[4,4,2,1,3,1],
[1,5,1,6,17,1],
[3,1,2,1,19,1],
[1,2,4,11,19,1],
[5,7,5,14,6,1],
[2,15,8,7,2,1],
[6,10,5,5,6,1],
[5,16,5,1,9,1],
[7,10,10,1,3,1],
[7,19,1,1,2,1],
[7,4,1,3,12,1],
[4,9,9,10,10,1],
[4,15,2,14,12,1],
[7,7,6,1,6,1],
[1,8,2,7,13,1],
[1,5,1,10,14,1],
[7,2,2,3,5,1],
[2,2,4,8,6,1],
[1,9,1,2,14,1],
[4,2,2,11,2,1],
[6,2,4,6,5,1],
[3,16,2,5,9,1],
[1,13,4,12,16,1],
[4,7,2,2,13,1],
[5,1,3,9,13,1],
[1,5,1,1,1,1],
[3,8,1,7,2,1],
[5,17,4,4,15,1],
[2,7,2,3,22,1],
[3,1,8,13,8,1],
[3,5,1,1,1,1],
[1,7,9,5,1,1],
[7,14,9,5,7,1],
[1,5,5,8,19,1],
[4,14,4,4,7,1],
[1,1,2,14,1,1],
[3,5,12,5,14,1],
[3,2,10,2,20,1],
[4,20,1,4,11,1],
[1,9,2,8,10,1],
[3,3,4,2,3,1],
[6,13,2,4,24,1],
[1,13,4,6,16,1],
[5,3,2,10,1,1],
[3,9,1,10,3,1],
[2,12,3,1,25,1],
[4,11,1,4,23,1],
[6,2,4,4,13,1],
[3,10,6,4,2,1],
[4,3,6,10,17,1],
[4,1,4,5,21,1],
[2,6,5,2,3,1],
[5,7,1,1,2,1],
[1,3,2,3,22,1],
[3,2,6,1,8,1],
[1,5,11,1,19,1],
[5,8,1,8,12,5],
[7,5,1,1,9,1],
[6,10,2,6,2,1],
[6,16,1,4,13,1],
[6,10,3,2,15,1],
[3,5,2,5,21,1],
[2,3,3,11,13,1],
[3,9,5,11,10,1],
[1,11,5,5,7,1],
[1,3,1,2,22,1],
[1,8,9,11,5,1],
[2,3,9,1,3,1],
[5,6,1,10,14,1],
[6,14,11,13,23,1],
[3,21,1,14,14,4],
[7,1,3,5,13,1],
[5,4,5,2,12,1],
[5,9,4,14,21,1],
[2,13,2,6,18,1],
[5,8,2,1,14,1],
[7,13,2,6,7,1],
[2,8,1,11,20,1],
[7,10,2,10,8,1],
[1,3,5,4,14,1],
[4,3,1,9,1,1],
[5,12,3,5,12,1],
[3,5,7,6,12,1],
[3,4,3,2,3,1],
[6,9,5,3,2,1],
[7,6,3,11,20,1],
[1,2,5,8,1,1],
[3,5,7,9,17,1],
[3,8,8,1,11,1],
[5,19,2,1,1,1],
[1,4,2,5,5,1],
[1,5,4,1,1,1],
[2,19,4,1,14,1],
[7,14,3,7,23,1],
[2,1,4,12,1,1],
[4,11,1,8,18,1],
[5,4,6,1,2,1],
[7,3,1,2,12,1],
[3,2,3,8,20,1],
[4,17,2,1,1,1],
[1,1,7,9,22,1],
[4,12,4,4,17,1],
[5,5,8,3,11,1],
[3,12,3,11,4,1],
[6,3,2,9,4,1],
[7,7,3,10,6,1],
[6,4,3,14,3,1],
[5,7,4,6,12,1],
[7,1,4,1,15,1],
[2,5,1,1,13,1],
[2,2,1,2,14,1],
[5,11,3,1,20,1],
[1,8,7,1,20,1],
[2,7,1,1,12,1],
[3,15,5,4,11,1],
[7,9,2,11,9,1],
[6,3,10,12,6,1],
[7,4,2,4,1,1],
[3,7,2,2,21,1],
[5,12,1,6,3,1],
[6,3,3,5,17,1],
[1,14,4,2,16,1],
[2,8,1,10,13,1],
[5,8,7,9,10,1],
[6,2,2,6,15,4],
[1,6,2,5,15,1],
[3,10,1,2,2,1],
[7,2,4,7,2,1],
[1,13,2,5,18,1],
[6,13,6,3,18,1],
[3,5,4,1,2,1],
[3,10,1,1,5,1],
[6,18,1,2,3,1],
[5,11,1,10,16,1],
[4,20,7,5,9,1],
[6,7,1,8,1,1],
[2,4,1,7,1,1],
[4,6,3,9,4,1],
[2,12,9,13,10,1],
[6,6,2,11,6,1],
[5,3,6,5,12,1],
[5,6,4,7,10,1],
[3,5,8,7,1,1],
[6,10,1,8,1,1],
[6,14,1,5,7,1],
[2,7,9,7,6,1],
[6,13,1,5,23,1],
[2,1,1,11,11,1],
[7,10,9,5,5,1],
[6,5,12,7,14,1],
[1,8,1,11,6,1],
[6,4,5,2,1,1],
[5,7,1,6,20,1],
[4,7,2,9,3,1],
[2,10,3,10,6,1],
[3,4,2,4,6,1],
[6,1,5,12,12,1],
[3,12,1,1,8,1],
[1,12,7,8,13,1],
[5,7,3,10,9,1],
[7,12,5,6,2,1],
[1,2,9,4,1,1],
[2,10,12,2,22,1],
[2,1,5,2,22,1],
[1,2,7,4,2,1],
[2,3,1,1,11,1],
[2,21,2,1,4,1],
[5,6,1,1,3,1],
[7,12,1,6,8,1],
[6,1,1,5,8,3],
[2,13,6,2,16,1],
[4,9,2,5,3,1],
[7,4,1,7,4,1],
[4,2,1,13,21,1],
[6,8,4,4,9,1],
[4,16,3,7,8,1],
[5,20,4,12,5,1],
[4,6,8,2,6,1],
[7,4,3,7,15,1],
[4,6,1,3,10,1],
[5,16,2,7,20,1],
[5,9,5,2,10,1],
[5,7,6,7,4,1],
[6,16,1,5,3,1],
[5,11,3,3,16,1],
[4,9,8,11,5,1],
[5,2,5,2,2,1],
[6,18,1,4,8,1],
[5,11,1,10,7,1],
[4,13,7,6,23,1],
[2,11,6,5,24,1],
[1,7,2,11,10,1],
[3,16,1,11,4,1],
[2,4,1,1,22,1],
[2,8,1,13,8,1],
[3,4,2,9,3,1],
[6,17,7,10,11,1],
[1,6,6,7,1,1],
[1,14,1,5,18,1],
[1,17,7,5,1,1],
[5,14,4,12,16,1],
[4,10,4,6,12,1],
[5,6,5,1,1,1],
[3,3,11,3,8,1],
[2,18,2,6,21,1],
[1,1,5,1,5,1],
[1,3,2,1,1,1],
[7,7,2,3,3,1],
[2,12,3,3,1,1],
[6,7,1,3,2,1],
[7,8,1,1,1,1],
[5,5,1,4,17,1],
[5,10,1,7,5,5],
[2,5,3,2,14,1],
[2,6,3,3,11,1],
[3,15,5,4,20,1],
[1,6,1,3,4,1],
[4,4,4,2,12,1],
[3,9,4,7,3,1],
[1,10,12,14,1,1],
[4,4,2,9,3,4],
[7,3,6,2,2,1],
[1,5,1,3,11,1],
[5,8,1,4,2,1],
[7,7,1,4,5,1],
[4,18,2,14,8,1],
[6,7,6,3,2,1],
[5,17,2,1,3,1],
[6,12,1,4,1,1],
[7,8,3,2,21,1],
[2,9,5,9,2,1],
[3,7,12,13,9,1],
[5,1,2,6,8,1],
[7,3,6,2,22,1],
[2,12,1,8,14,1],
[6,2,3,5,6,1],
[3,6,6,2,8,1],
[1,2,2,4,13,1],
[1,4,6,7,9,1],
[2,16,3,10,4,1],
[1,19,1,4,21,1],
[6,6,1,14,1,1],
[4,10,2,4,9,1],
[1,2,8,1,4,1],
[6,13,4,7,7,1],
[6,3,10,6,11,1],
[4,8,6,1,12,1],
[5,8,3,4,11,1],
[3,3,1,3,6,1],
[6,20,11,2,2,1],
[4,14,1,4,18,1],
[2,5,10,2,3,1],
[5,16,9,11,15,1],
[1,6,3,3,1,1],
[4,3,2,6,3,2],
[5,20,3,12,2,1],
[4,13,2,2,24,1],
[5,11,2,3,18,1],
[4,1,3,9,21,1],
[4,17,7,5,22,1],
[4,14,2,4,18,1],
[5,18,1,1,8,1],
[4,9,7,1,1,1],
[1,16,7,7,1,1],
[2,5,1,2,8,1],
[7,9,2,2,11,1],
[3,2,6,6,2,1],
[2,14,2,8,7,1],
[4,12,4,1,1,1],
[3,8,1,9,5,1],
[6,7,1,2,4,1],
[4,7,1,1,19,1],
[6,8,3,11,6,1],
[5,11,1,12,7,1],
[7,16,1,3,5,1],
[7,5,1,2,8,1],
[1,15,4,5,4,1],
[3,11,4,3,7,1],
[3,19,2,11,3,1],
[3,11,11,3,23,1],
[5,5,5,10,14,1],
[4,6,6,1,6,1],
[2,4,1,10,9,1],
[3,7,6,4,2,1],
[1,10,2,1,8,1],
[3,3,1,6,22,1],
[4,2,3,6,15,1],
[3,14,5,6,23,1],
[7,1,8,13,15,1],
[4,17,1,2,8,1],
[6,15,1,3,5,1],
[1,10,2,10,10,1],
[2,3,9,13,1,1],
[1,5,5,4,10,1],
[5,3,9,1,15,1],
[3,14,1,4,24,1],
[4,1,2,3,12,1],
[2,15,1,4,19,1],
[7,11,9,8,24,1],
[3,16,1,9,8,1],
[1,1,4,11,8,1],
[6,3,1,5,1,1],
[2,13,1,10,24,1],
[4,11,1,4,18,1],
[2,4,6,14,20,1],
[2,2,1,2,13,1],
[6,7,9,1,11,1],
[6,1,1,3,19,1],
[3,12,1,14,22,1],
[6,10,2,12,10,1],
[2,18,2,3,11,1],
[2,6,1,13,3,1],
[5,1,3,3,14,1],
[2,5,8,2,6,1],
[5,7,5,1,11,1],
[4,12,4,6,3,1],
[1,2,11,6,1,1],
[4,5,3,5,17,1],
[5,6,1,9,22,1],
[7,13,2,5,16,1],
[2,6,1,2,15,1],
[3,13,2,9,24,1],
[1,14,1,7,7,1],
[3,16,1,3,1,1],
[3,7,4,6,9,1],
[5,8,1,3,15,1],
[5,4,1,7,3,1],
[2,18,1,6,4,5],
[7,9,1,2,13,1],
[3,3,4,6,12,1],
[1,1,6,1,9,1],
[4,2,2,2,13,1],
[5,3,4,12,8,1],
[4,11,11,3,23,1],
[1,6,1,5,14,1],
[7,1,3,1,21,1],
[2,1,12,6,17,1],
[1,10,3,3,5,1],
[4,14,1,10,16,1],
[5,11,3,1,19,1],
[4,10,1,1,14,1],
[6,14,4,2,7,1],
[1,11,1,5,7,1],
[1,12,5,5,5,1],
[1,7,12,1,5,1],
[7,1,1,1,11,1],
[1,14,3,10,24,1],
[2,19,1,12,12,1],
[5,20,7,10,1,1],
[7,13,12,9,23,1],
[5,12,3,2,11,1],
[4,12,6,6,1,1],
[7,4,6,6,11,1],
[1,1,3,13,14,1],
[3,10,3,11,13,1],
[3,5,1,7,4,1],
[1,4,1,4,1,1],
[1,9,2,9,21,1],
[4,18,4,11,13,1],
[4,16,3,6,2,1],
[4,17,9,4,3,1],
[7,20,11,3,9,1],
[5,6,1,10,21,4],
[4,4,10,3,11,1],
[7,6,7,3,5,1],
[1,1,3,12,1,1],
[2,5,2,5,6,1],
[3,8,5,11,2,1],
[6,1,5,1,14,1],
[7,12,4,3,5,1],
[6,13,11,3,16,1],
[3,5,3,1,13,1],
[6,12,1,12,20,1],
[6,8,2,8,14,1],
[5,2,8,1,20,1],
[6,5,2,10,5,1],
[3,2,2,13,1,1],
[4,6,1,1,14,1],
[2,9,1,4,5,1],
[7,11,4,13,16,1],
[2,4,3,5,8,1],
[2,15,2,6,13,1],
[2,5,9,6,11,1],
[5,15,1,14,2,2],
[6,8,5,11,3,1],
[6,11,7,2,7,1],
[5,3,1,8,2,1],
[2,4,1,1,4,1],
[4,8,6,2,1,1],
[7,3,1,5,10,1],
[4,5,1,13,10,2],
[2,4,2,6,11,1],
[4,10,2,1,1,1],
[4,4,1,11,3,1],
[6,17,6,8,1,1],
[5,3,1,2,5,1],
[3,1,2,7,13,1],
[5,10,4,12,4,1],
[3,10,2,12,10,1],
[5,1,2,1,9,1],
[7,2,12,2,12,1],
[1,5,1,10,6,1],
[2,1,12,11,14,1],
[1,8,1,12,6,1],
[6,10,5,3,10,1],
[2,4,8,4,4,1],
[1,11,3,10,7,1],
[7,14,2,8,16,1],
[2,10,4,4,25,1],
[5,3,4,1,4,1],
[3,15,7,1,26,1],
[2,9,9,1,11,1],
[1,9,4,6,1,1],
[6,17,4,1,9,1],
[5,9,1,6,4,1],
[3,9,9,3,26,3],
[3,6,1,12,2,1],
[4,9,2,4,9,1],
[1,5,10,12,5,1],
[1,15,1,6,11,1],
[5,1,6,6,20,1],
[3,3,1,2,4,1],
[1,15,5,10,9,1],
[3,19,2,13,6,1],
[5,16,1,3,19,1],
[3,1,4,8,2,1],
[5,6,4,12,3,1],
[2,17,1,13,2,1],
[6,19,1,14,2,2],
[4,21,1,3,11,1],
[4,17,1,9,1,1],
[7,6,4,4,20,1],
[6,12,3,11,3,1],
[4,2,2,5,17,1],
[2,1,6,12,14,1],
[4,16,3,13,8,1],
[1,13,2,12,7,1],
[1,2,6,8,9,1],
[7,5,1,9,10,1],
[1,4,1,10,12,1],
[6,8,3,7,13,1],
[3,8,5,1,15,1],
[7,10,4,5,2,1],
[5,4,1,5,20,1],
[2,9,10,9,1,1],
[3,4,7,8,10,1],
[7,5,7,14,11,1],
[7,3,2,3,4,2],
[4,6,1,1,10,1],
[5,7,9,13,5,1],
[4,9,1,1,6,1],
[6,3,1,2,19,1],
[2,2,7,2,2,1],
[7,12,3,3,12,1],
[6,8,1,1,5,1],
[3,2,1,11,2,1],
[1,13,6,5,16,1],
[3,1,3,1,2,1],
[5,3,1,4,1,1],
[1,14,2,9,16,1],
[3,15,1,14,8,1],
[4,10,2,7,11,2],
[7,6,2,13,10,1],
[4,1,1,2,21,1],
[6,2,1,7,13,1],
[2,19,2,14,6,1],
[5,13,1,3,16,1],
[6,11,6,14,7,1],
[1,6,5,10,10,1],
[4,1,5,6,17,1],
[3,2,6,5,17,1],
[3,14,2,2,18,1],
[2,8,6,9,9,1],
[1,2,4,4,17,1],
[3,11,5,9,18,1],
[2,9,1,10,12,1],
[2,11,1,8,7,1],
[6,13,7,13,7,1],
[5,12,1,12,10,1],
[3,15,5,10,8,1],
[3,16,2,7,1,1],
[6,1,3,11,5,1],
[4,13,1,11,18,1]
];

module.exports = dnaCombinations;