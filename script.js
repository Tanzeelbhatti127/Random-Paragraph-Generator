const text = [ //array
    `The leaves were purple when it first sprouted and through its life, it changed to green to yellow to red to orange to currently golden. The property that is most unsettling among all is that it can grant any wish, given the seeker’s desire must be a desperate one.`,

    `Zero is a beautiful number. Not because it is round and cute (that could be an argument for it nevertheless) but because what it signifies. It marks the beginning of something. It marks the lowest something, or someone can go. It is the ultimate foundation to build anything upon.

    Over last several years, I’ve started several things from scratch and have failed at many (thus going back to zero), and I’ve realized there’s nothing more liberating than being at zero because the only way from zero is upwards. A very good friend once told me, “Don’t worry if you’ve failed. Rockets that touch the sky always launch from the ground.”`,

    `Throughout the world, television sets were stormed by the news of the discovery of a stone that had a wicked writing on it. The stone became the center of attention for the global media after some scientists claimed the stone to be engraved by aliens. The headlines read, “Aliens sent us a message. Scientists are onto decoding it” throughout the world.

    I was sitting in my living room with my kids listening to the radio in the background when the song stopped playing and a cacophony voice started speaking. “An alien message has been received and we think, this news is more important than the romantic songs. Scientists are claiming that we are very close to talking to aliens and that they have found and contacted us first. They claim that aliens engraved their message on a large stone that’s found in the Grand Canyon by some hikers.”`,

    `During one such summer vacation, I was assigned the homework to build a model of a volcano. I, like an obedient student, noted it down in my diary and came back home. Every year, my plan for summer vacation was to finish the homework in the first couple of weeks itself and then spend the rest of the vacation chilling out, but that never happened. That year wasn’t different. But it was different in a sense. I did finish all my homework in first few weeks and spent the last few weeks making the volcano.`,

    `Steve was among those who took pride in being called busy. He was a salesman, single and smart. He was among those who wake up early in the morning, go to workout, go to work jumping from one meeting to another, come back home by dusk, spend time with the pet and go to sleep by nine o’clock.

    He was in denial of his loneliness and somehow this had made him make extra efforts to look busy to the world. No matter what happens, no one must know Steve is lonely! Getting labeled busy is much better than getting labeled lonely, he thought.`,

    `Not many people know about my admiration for pancakes. I love them. I love when maple syrup flows over it, and I use my fork and knife to cut a piece, dip in the maple syrup and put it in my mouth to savor the taste. It’s not like I have pancakes day in and day out. I love having them when I’m having them.

    There’s a cafe on my way to the gym that serves delicious pancakes but the catch is that it serves them only between 8 am and 11 am — that’s the breakfast timing there. I call it a catch because I’ve tried several times but I could never reach the cafe before 11 am in the morning. Every time I pass in front of the cafe, my tongue remembers the taste the pancake dipped in maple syrup. Yum!`,

    `Everyone knew Mrs. Stella lived alone in a tiny log house at the end of the road and yet they found her cheerful every time they ran into her. Sometimes they stopped her and asked the secret of her happiness, to which she always replied, “My friends.”

    Her smile — the smile of an elderly lonely woman — discouraged almost everyone to ask any follow-up question. Almost everyone. Almost. Joey was the notorious kid down the block who never gave up. He’d ask, “I am your friend. Who else? Where are they? Will they play with me?”
    
    She’d shrug her shoulders with a faint smile on her lips, as if they are trying to conceal a secret, and pull out a chocolate out of her bag for Joey. “Here’s your chocolate, Joey,” she’d say extending her hand. Joey would grab the chocolate and run away to play with his friends. Not today. Today he seemed determined. He declined the chocolate and insisted on meeting her other friends.`,

    `Afterlife isn’t what I thought it’d be. I expected an arching door welcoming me. I expected to be greeted under the bright sun on green grasslands. All this in case I was going to what living beings called The Heaven. In case I was sorted into The Hell, I had a different set of expectations. Blinding darkness all around. Raging fire. And Satan’s roaring laughs. Nope. Afterlife is nothing like I expected.

    Instead, I found myself standing in a pearly white room — probably, a dome it was as I couldn’t see any corner. I was naked. I turned around on the spot several times to locate another person whom I can ask for directions, but all I found was a screen greeting me. It read -`,

    `Iam in jail. A small cell to be more accurate. It’s dark in here. I shouldn’t have been here. What I call ‘heroism’, this world calls a ‘murder’. I just prevented a zombie apocalypse — by killing the first one to turn — my own wife. For a very brief moment right after I pulled the dagger out of her back, I felt like a hero, and then it dawned on me that the very world I saved, will become my enemy thereafter.`,
];

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

        //while there remain elements to shuffle.
        while(currentIndex != 0) {

            //pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            //And swap it with the current element .
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }

        return array
}



const item = document.querySelector("#items")
const dataContainer = document.querySelector("#data")
const generate = () => {
    if(isNaN(item.value) || item.value < 0 || item.value > 9){
        const randomIndex = Math.floor(Math.random() * text.length)
        dataContainer.innerHTML = `<p> ${text[randomIndex]} </p>`
    }else{
        const localText = shuffle(text);
        const data = localText.slice(0, item.value)
        const parars = data.map(
            (d) => {
                return `<p> ${d} </p>`
            }
        )
        console.log(parars)
        console.log(parars.join(""))
        dataContainer.innerHTML = parars.join(""); // .join = array to string conversion (join to empty space)
    }
}