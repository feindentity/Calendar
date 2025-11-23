const calendarData = [
    // November 2025
    {
        day: 1, // Internal ID, keeping sequential for logic simplicity, but display will use dateLabel
        dateLabel: "Nov 23",
        category: 'Stress',
        title: "The Calm Before",
        content: "Take a deep breath. The holiday rush is starting, but today, just be. You don't need to solve everything right now.",
        image: "assets/img_stress.png"
    },
    {
        day: 2,
        dateLabel: "Nov 24",
        category: 'Support',
        title: "Managing Expectations",
        content: "Perfect is the enemy of good. It's okay if the decorations aren't up or the menu isn't finalized. You are enough.",
        image: "assets/img_support.png"
    },
    {
        day: 3,
        dateLabel: "Nov 25",
        category: 'Self-Care',
        title: "Travel Grace",
        content: "Whether you're traveling or staying put, disruptions to routine are hard. Drink water, stretch, and be kind to yourself.",
        image: "assets/img_selfcare.png"
    },
    {
        day: 4,
        dateLabel: "Nov 26",
        category: 'Awkward Convos',
        title: "Kitchen Boundaries",
        content: "Too many cooks? It's okay to step out of the kitchen, or politely ask for space. Your peace of mind matters more than the gravy.",
        image: "assets/img_awkward.png"
    },
    {
        day: 5,
        dateLabel: "Nov 27",
        category: 'Grief',
        title: "Thanksgiving Memories",
        content: "Holidays can highlight who isn't at the table. It's okay to feel sad amidst the celebration. Honor their memory in a way that feels right to you.",
        image: "assets/img_grief.png"
    },
    {
        day: 6,
        dateLabel: "Nov 28",
        category: 'Stress',
        title: "Opting Out",
        content: "You don't have to participate in the shopping frenzy. A quiet walk or a book is a valid way to spend today.",
        image: "assets/img_stress.png"
    },
    {
        day: 7,
        dateLabel: "Nov 29",
        category: 'Self-Care',
        title: "Decompression Day",
        content: "The big meal is done. Wear comfortable clothes, eat leftovers, and rest. You've earned it.",
        image: "assets/img_selfcare.png"
    },
    {
        day: 8,
        dateLabel: "Nov 30",
        category: 'Inspiration',
        title: "December Eve",
        content: "As we move into December, set an intention for the month. What do you want to *feel* this season? Focus on that.",
        image: "assets/img_inspiration.png"
    },
    // December 2025 (Original 1-31, shifted IDs)
    {
        day: 9,
        dateLabel: "Dec 1",
        category: 'Stress',
        title: "Breathe In, Breathe Out",
        content: "The holidays are a marathon, not a sprint. Take 5 minutes today to just breathe. No phone, no list, just you.",
        image: "assets/img_stress.png"
    },
    {
        day: 10,
        dateLabel: "Dec 2",
        category: 'Support',
        title: "Setting Boundaries",
        content: "It's okay to say 'no' to events that drain you. Your presence is a present, but only if you're present enough to enjoy it.",
        image: "assets/img_support.png"
    },
    {
        day: 11,
        dateLabel: "Dec 3",
        category: 'Grief',
        title: "Honoring Memories",
        content: "Missing someone special? Light a candle or play their favorite song. It's okay to let grief sit beside joy.",
        image: "assets/img_grief.png"
    },
    {
        day: 12,
        dateLabel: "Dec 4",
        category: 'Awkward Convos',
        title: "The Pivot",
        content: "When a relative asks a prying question, try the pivot: 'That's a long story! But tell me, how is your [hobby/pet]?'",
        image: "assets/img_awkward.png"
    },
    {
        day: 13,
        dateLabel: "Dec 5",
        category: 'Self-Care',
        title: "Hydration Station",
        content: "Between the hot cocoa and the lattes, don't forget water. Your body (and brain) will thank you.",
        image: "assets/img_selfcare.png"
    },
    {
        day: 14,
        dateLabel: "Dec 6",
        category: 'Inspiration',
        title: "Small Joys",
        content: "Look for one small, beautiful thing today. A snowflake, a light, a smile. Collect these moments.",
        image: "assets/img_inspiration.png"
    },
    {
        day: 15,
        dateLabel: "Dec 7",
        category: 'Stress',
        title: "List Triage",
        content: "Look at your to-do list. Cross off one thing that doesn't *really* need to happen. Let it go.",
        image: "assets/img_stress.png"
    },
    {
        day: 16,
        dateLabel: "Dec 8",
        category: 'Support',
        title: "Ask for Help",
        content: "You don't have to do it all alone. Ask a friend to help wrap gifts or just to chat while you work.",
        image: "assets/img_support.png"
    },
    {
        day: 17,
        dateLabel: "Dec 9",
        category: 'Grief',
        title: "New Traditions",
        content: "If old traditions hurt too much, it's okay to make a new one. Order pizza, watch a new movie. Change is okay.",
        image: "assets/img_grief.png"
    },
    {
        day: 18,
        dateLabel: "Dec 10",
        category: 'Awkward Convos',
        title: "Politics Free Zone",
        content: "Propose a 'Politics Free Zone' for dinner. If it comes up, gently remind everyone: 'We're here to eat, not debate!'",
        image: "assets/img_awkward.png"
    },
    {
        day: 19,
        dateLabel: "Dec 11",
        category: 'Self-Care',
        title: "Early Night",
        content: "Go to bed 30 minutes earlier than usual. Sleep is the best defense against holiday stress.",
        image: "assets/img_selfcare.png"
    },
    {
        day: 20,
        dateLabel: "Dec 12",
        category: 'Inspiration',
        title: "Give Kindness",
        content: "The best way to cheer yourself up is to try to cheer someone else up. Send a kind text today.",
        image: "assets/img_inspiration.png"
    },
    {
        day: 21,
        dateLabel: "Dec 13",
        category: 'Stress',
        title: "Budget Check",
        content: "Financial stress is real. Remember, thoughtful notes often mean more than expensive gifts.",
        image: "assets/img_stress.png"
    },
    {
        day: 22,
        dateLabel: "Dec 14",
        category: 'Support',
        title: "Hanukkah Begins",
        content: "Happy Hanukkah! Tonight the first candle is lit. Remember that even a little light pushes back the darkness.",
        image: "assets/img_support.png"
    },
    {
        day: 23,
        dateLabel: "Dec 15",
        category: 'Grief',
        title: "It Comes in Waves",
        content: "Grief isn't linear. If you have a hard day after a good one, that's normal. Be gentle with yourself.",
        image: "assets/img_grief.png"
    },
    {
        day: 24,
        dateLabel: "Dec 16",
        category: 'Awkward Convos',
        title: "The 'Why' Question",
        content: "'Why are you still single/childless/etc?' Answer: 'I'm focusing on my happiness right now. Thanks for asking!'",
        image: "assets/img_awkward.png"
    },
    {
        day: 25,
        dateLabel: "Dec 17",
        category: 'Self-Care',
        title: "Sensory Break",
        content: "Too much noise? Lights? Smells? Step outside or into a dark room for 5 minutes. Reset your senses.",
        image: "assets/img_selfcare.png"
    },
    {
        day: 26,
        dateLabel: "Dec 18",
        category: 'Inspiration',
        title: "You Are Doing Great",
        content: "Seriously. Look at how much you've handled. Give yourself some credit.",
        image: "assets/img_inspiration.png"
    },
    {
        day: 27,
        dateLabel: "Dec 19",
        category: 'Stress',
        title: "Imperfection is Beauty",
        content: "The crooked decorations, the burnt cookies—these are the stories you'll laugh about later. Embrace the mess.",
        image: "assets/img_stress.png"
    },
    {
        day: 28,
        dateLabel: "Dec 20",
        category: 'Support',
        title: "Community",
        content: "Look for free community events. A choir, a light display. Being around others without obligation can be uplifting.",
        image: "assets/img_support.png"
    },
    {
        day: 29,
        dateLabel: "Dec 21",
        category: 'Grief',
        title: "Winter Solstice & Yule",
        content: "On the longest night, remember that the light always returns. Your light will return too. Happy Yule to those celebrating the return of the sun.",
        image: "assets/img_grief.png"
    },
    {
        day: 30,
        dateLabel: "Dec 22",
        category: 'Inspiration',
        title: "Hanukkah Ends",
        content: "On this last night of Hanukkah, with the menorah fully lit, reflect on the warmth and resilience you carry within you.",
        image: "assets/img_inspiration.png"
    },
    {
        day: 31,
        dateLabel: "Dec 23",
        category: 'Self-Care',
        title: "Nourish",
        content: "Eat a vegetable. Drink a glass of water. Balance the treats with fuel.",
        image: "assets/img_selfcare.png"
    },
    {
        day: 32,
        dateLabel: "Dec 24",
        category: 'Inspiration',
        title: "Anticipation",
        content: "The magic is often in the waiting. Enjoy the quiet moments of this evening.",
        image: "assets/img_inspiration.png"
    },
    {
        day: 33,
        dateLabel: "Dec 25",
        category: 'Support',
        title: "Season's Greetings",
        content: "Merry Christmas and Happy Holidays! Whether it's chaotic or quiet, you are here. Take a moment to appreciate yourself.",
        image: "assets/img_support.png"
    },
    {
        day: 34,
        dateLabel: "Dec 26",
        category: 'Stress',
        title: "Boxing Day & Kwanzaa",
        content: "The pressure is off. Happy Kwanzaa to those celebrating! Today is about Umoja (Unity). Rest and connect.",
        image: "assets/img_stress.png"
    },
    {
        day: 35,
        dateLabel: "Dec 27",
        category: 'Self-Care',
        title: "Movement & Self-Determination",
        content: "Go for a walk. Shake off the cabin fever. In the spirit of Kwanzaa's second principle, Kujichagulia (Self-Determination), define what well-being means for *you*.",
        image: "assets/img_selfcare.png"
    },
    {
        day: 36,
        dateLabel: "Dec 28",
        category: 'Grief',
        title: "Post-Holiday Blues",
        content: "It's normal to feel a slump after the big day. Be kind to yourself. Plan something small to look forward to.",
        image: "assets/img_grief.png"
    },
    {
        day: 37,
        dateLabel: "Dec 29",
        category: 'Awkward Convos',
        title: "New Year Pressure",
        content: "Don't let anyone pressure you about resolutions. You don't have to reinvent yourself just because the year changes.",
        image: "assets/img_awkward.png"
    },
    {
        day: 38,
        dateLabel: "Dec 30",
        category: 'Inspiration',
        title: "Reflection & Purpose",
        content: "Look back on the year. Reflect on your purpose (Nia), a core principle of Kwanzaa. How do you want to move through the coming year?",
        image: "assets/img_inspiration.png"
    },
    {
        day: 39,
        dateLabel: "Dec 31",
        category: 'Support',
        title: "New Beginnings",
        content: "Happy New Year's Eve! Here's to a fresh start, however small. You've got this.",
        image: "assets/img_support.png"
    }
];
