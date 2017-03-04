//
for (var i = 99; i >= 0; i--) {
  if (i <= 99 && i >= 2 ) {
    var take = '\nTake one down and pass it around, '
    console.log([i] + ' bottles of beer on the wall, ' + [i] +  ' bottles of beer.' + take + [i] + ' bottles of beer on the wall.\n\n')
  }else if (i === 1) {
    console.log([i] + ' bottle of beer on the wall, ' + [i] +  ' bottle of beer.' + take + [i] + ' bottle of beer on the wall.\n\n')
  }else {
    console.log('No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.')
  }
}
