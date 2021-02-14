let specific_issues = 
[
"Abolish ICE",
"Black Lives Matter","Climate Action",
"Defund The Police",
"Fight Antisemitism",
"Indigenous Lives Matter", 
"LGBTQ+",
"Mental Health", 
"Protest Tips"
].map(word => word.toLowerCase());

let find_trigger_rate = (text) => {
    text = text.toLowerCase();
    let splittedText = [];
    splittedText = text.split(' ');
    let containing_trigger_words = 0;
    trigger_words.forEach(tw => {
        if(text.includes(tw)){
            containing_trigger_words++;
        }
    })
    return containing_specific_issues/splittedText.length;
};

let find_specific_issues = (text) => {
    text = text.toLowerCase();
    text = text.replace('\n', '')
    let containing_specific_issues=[];
    specific_issues.forEach(tw => {
        if(text.includes(tw)){
            containing_specific_issues.push(tw);
        }
    })
    return containing_specific_issues
}
let treshold_check = (text) => {
    let Issue = find_specific_issues(text);
    if (Issue.length > 1)
        return `Content contains ${Issue.length} trigger words. They Are: ${Issue}`
    if (Issue == 1)
        return `Content contains ${Issue.length} trigger word. It is: ${Issue}`
    else
        return "Content contains no issues."
}

let word = 'Gay A gay man is one who is romantically, sexually and/or emotionally attracted to men. The word gay can be used to refer generally to lesbian, gay and bisexual people but many women prefer to be called lesbian. Most gay people don’t like to be referred to as homosexual because of the negative historical associations with the word and because the word gay better reflects their identity. \nBisexual A bisexual person is someone who is romantically, sexually and/or emotionally attracted to people of genders both the same and different to their own.\nTransgender or Trans : Transgender an umbrella term used to describe people whose gender identity (internal feeling of being male, female or non-binary) and/or gender expression, differs from the gender they were assigned at birth. Not everyone whose appearance or behaviour is gender-atypical will identify as a transgender person.\n';
let result = treshold_check(word);

console.log('result: ', result);
