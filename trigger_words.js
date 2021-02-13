let trigger_words = 
["Bisexual",
"Sexual Assault",
"Sexual", 
"Assault",
"Abuse",
"Child Abuse",
"Child",
"Animal cruelty or Animal Death",
"Self-harm",
"Suicide",
"Eating disorders",
"Body Dysmorphia",
"Violence",
"Kidnapping",
"Abduction",
"Death",
"Rape",
"Murder",
"Lynching",
"Harassment",
"Miscarriage", 
"Blood",
"Ableism",
"Racism",
"Racial Slurs",
"Sexism",
"Misogyny",
"Classism",
"Hateful language directed at religious groups (e.g., Islamophobia, Antisemitism)",
"Casteism",
"Transphobia",
"Trans Misogyny",
"Homophobia",
"Queerphobia",
"Police Brutality",
"islamophobia",
"antisemitism",
"Racism" ,"Racial" ," Racial Slavery","Superior Race",
"Police","Brutality","Microagressions","Colorism",
"Prejudice" ,"Genocide" ,"Islamphobia",
"Antisemitism Witch" ,"Prosecution", "Concentration Camps",
"Acephobia","Homophobia","Biphobia",
"Transphobia","Bi-Erasure","Internalized Acephobia","Homophobia",
"Transphobia",
"Triggering talk regarding pronouns","Deathnaming Character","Misgendering",
"Forced Outing of Character","Curing of Disabilities","Lifechanging injury",
"Ableism","Ableistic language","Detailed Medical Talk Seizures","Paralyzed",
"Animal Death","Graphic Deaths","Mass Death",
"Murder","Execution","Burned at the Stake",
"Hangings (Not by suicide)","Decapitation","Suffocation",
"Burning People","Extreme Violence","Gore",
"Torture","Mutilation","Self-Mutilation",
"Mutilation of Corpses","Cutting of Limbs","Forced Blood Draining",
"Threatening baby/child","Violence against Children","child Abuse",
"Physical Abuse","Domestic Abuse","Animal Cruelty",
"Escalating Violence","Described Blood","Graphic Violence",
"Doxxing",
"Afghanistan","Chile",
"China",
"Hong Kong",
"India",
"Iraq",
"Kurdistan",
"Lebanon",
"Mexico",
"Palestine",
"Philippines",
"Turkey",
"Yemen",
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
    return containing_trigger_words/splittedText.length;
};

let find_trigger_words = (text) => {
    text = text.toLowerCase();
    text = text.replace('\n', '')
    let containing_trigger_words=[];
    trigger_words.forEach(tw => {
        if(text.includes(tw)){
            containing_trigger_words.push(tw);
        }
    })
    return containing_trigger_words
}
let treshold_check = (text) => {
    let tw = find_trigger_words(text);
    if (tw.length > 1)
        return `Content contains ${tw.length} trigger words. They Are: ${tw}`
    if (tw.length == 1)
        return `Content contains ${tw.length} trigger word. It is: ${tw}`
    else
        return "Content contains no trigger words."
}

let word = 'Gay A gay man is one who is romantically, sexually and/or emotionally attracted to men. The word gay can be used to refer generally to lesbian, gay and bisexual people but many women prefer to be called lesbian. Most gay people don’t like to be referred to as homosexual because of the negative historical associations with the word and because the word gay better reflects their identity. \nBisexual A bisexual person is someone who is romantically, sexually and/or emotionally attracted to people of genders both the same and different to their own.\nTransgender or Trans : Transgender an umbrella term used to describe people whose gender identity (internal feeling of being male, female or non-binary) and/or gender expression, differs from the gender they were assigned at birth. Not everyone whose appearance or behaviour is gender-atypical will identify as a transgender person.\n';
let result = treshold_check(word);

console.log('result: ', result);