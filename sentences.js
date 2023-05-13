/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */
const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];

function result(sentences) {
  //make variable that contains map from each sentence to its sentence length
  const words_each_sentence = sentences.map(sentence => {
    //make variable that convert each sentence become array of its words with space splitting
  	const splitted_sentence = sentence.split(" ");
    return splitted_sentence.length
  })
  //convert the sentences' length to iterable, and find the maximum value
  return Math.max(...words_each_sentence)
}

console.log(result(sentences));
