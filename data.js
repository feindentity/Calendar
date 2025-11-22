const calendarData = [
    {
        day: 1,
        category: 'Welcome',
        title: "The Journey Begins",
        content: "Welcome to your Holiday Support Calendar. Take a deep breath. You are not alone in this season.",
        image: "assets/img_welcome.png"
    },
    {
        day: 2,
        category: 'Support',
        title: "Setting Boundaries",
        content: "It's okay to say 'no' to events that drain you. Your presence is a present, but only if you're present enough to enjoy it.",
        image: "assets/img_support.png"
    },
    {
        day: 3,
        category: 'Grief',
        title: "Honoring Memories",
        content: "Missing someone special? Light a candle for them tonight. It's okay to feel sad even when everything looks festive.",
        image: "assets/img_grief.png"
    },
    {
        day: 4,
        category: 'Awkward Convos',
        title: "The Pivot",
        content: "When asked a prying question, try: 'That's a long story for another time! Tell me about your [hobby/trip/pet] instead.'",
        image: "assets/img_awkward.png"
    },
    {
        day: 5,
        category: 'Self-Care',
        title: "Hydration Station",
        content: "Between the eggnog and the coffee, don't forget water. Your body (and skin) will thank you.",
        image: "assets/img_selfcare.png"
    },
    {
        day: 6,
        category: 'Inspiration',
        title: "Winter Wisdom",
        content: "\"In the depth of winter, I finally learned that within me there lay an invincible summer.\" - Albert Camus",
        image: "assets/img_inspiration.png"
    },
    {
        day: 7,
        category: 'Stress',
        title: "Lower the Bar",
        content: "The perfect holiday doesn't exist. Aim for 'good enough' and enjoy the messy, real moments.",
        image: "assets/img_stress.png"
    },
    {
        day: 8,
        category: 'Support',
        title: "Financial Peace",
        content: "Gifts don't have to break the bank. A heartfelt letter or a homemade treat often means more than an expensive gadget.",
        image: "assets/img_support.png"
    },
    {
        day: 9,
        category: 'Grief',
        title: "New Traditions",
        content: "If old traditions hurt too much, it's okay to make new ones. Order pizza, watch a movie, do what feels right for YOU.",
        image: "assets/img_grief.png"
    },
    {
        day: 10,
        category: 'Awkward Convos',
        title: "Politics... Nope.",
        content: "If the conversation turns political and heated: 'I've promised myself a politics-free holiday. Let's talk about food!'",
        image: "assets/img_awkward.png"
    },
    {
        day: 11,
        category: 'Self-Care',
        title: "Cozy Night In",
        content: "Cancel plans if you need to. Put on fuzzy socks, make hot cocoa, and read a book. Recharge.",
        image: "assets/img_selfcare.png"
    },
    {
        day: 12,
        category: 'Inspiration',
        title: "Light in Darkness",
        content: "\"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.\" - Martin Luther King Jr.",
        image: "assets/img_inspiration.png"
    },
    {
        day: 13,
        category: 'Stress',
        title: "Delegate",
        content: "You don't have to do it all. Ask for help with cooking, cleaning, or wrapping. People often want to help but don't know how.",
        image: "assets/img_stress.png"
    },
    {
        day: 14,
        category: 'Support',
        title: "Check In",
        content: "Text a friend who might also be struggling. 'Thinking of you, no need to reply.' It goes a long way.",
        image: "assets/img_support.png"
    },
    {
        day: 15,
        category: 'Grief',
        title: "It Comes in Waves",
        content: "Grief isn't linear. You might feel fine one minute and teary the next. Ride the wave, don't fight it.",
        image: "assets/img_grief.png"
    },
    {
        day: 16,
        category: 'Awkward Convos',
        title: "Relationship Status",
        content: "Q: 'Why are you still single?' A: 'I'm just lucky, I guess! pass the potatoes?'",
        image: "assets/img_awkward.png"
    },
    {
        day: 17,
        category: 'Self-Care',
        title: "Move Your Body",
        content: "A 10-minute walk in the crisp air can reset your nervous system. Bundle up and get outside.",
        image: "assets/img_selfcare.png"
    },
    {
        day: 18,
        category: 'Inspiration',
        title: "Kindness",
        content: "\"My religion is very simple. My religion is kindness.\" - Dalai Lama",
        image: "assets/img_inspiration.png"
    },
    {
        day: 19,
        category: 'Stress',
        title: "Digital Detox",
        content: "Step away from the curated perfection of social media. Real life is unfiltered and beautiful in its own way.",
        image: "assets/img_stress.png"
    },
    {
        day: 20,
        category: 'Support',
        title: "Acceptance",
        content: "Accept family members as they are, not as you wish they were. It saves a lot of energy.",
        image: "assets/img_support.png"
    },
    {
        day: 21,
        category: 'Grief',
        title: "The Empty Chair",
        content: "Acknowledge the empty chair. A toast to those who aren't here can be a healing moment for everyone.",
        image: "assets/img_grief.png"
    },
    {
        day: 22,
        category: 'Awkward Convos',
        title: "Career Advice",
        content: "Unsolicited career advice? 'That's an interesting perspective. I'm really happy with my path right now.'",
        image: "assets/img_awkward.png"
    },
    {
        day: 23,
        category: 'Self-Care',
        title: "Sleep",
        content: "Prioritize sleep. Everything looks more manageable after a good night's rest.",
        image: "assets/img_selfcare.png"
    },
    {
        day: 24,
        category: 'Inspiration',
        title: "Peace",
        content: "\"Peace begins with a smile.\" - Mother Teresa",
        image: "assets/img_inspiration.png"
    },
    {
        day: 25,
        category: 'Support',
        title: "You Made It",
        content: "It's the big day. Take a deep breath. Look for one small moment of joy today, no matter how chaotic it gets.",
        image: "assets/img_support.png"
    },
    {
        day: 26,
        category: 'Stress',
        title: "Post-Holiday Slump",
        content: "The buildup is over. It's normal to feel a letdown. Be gentle with yourself today.",
        image: "assets/img_stress.png"
    },
    {
        day: 27,
        category: 'Self-Care',
        title: "Leftovers & Movies",
        content: "Today is for pajamas, leftovers, and your favorite comfort movie. No guilt allowed.",
        image: "assets/img_selfcare.png"
    },
    {
        day: 28,
        category: 'Grief',
        title: "Reflection",
        content: "As the year ends, reflect on the strength you've shown. You've navigated difficult days and you're still here.",
        image: "assets/img_grief.png"
    },
    {
        day: 29,
        category: 'Awkward Convos',
        title: "Resolutions",
        content: "Don't feel pressured to share resolutions. 'I'm still processing this year!' is a valid answer.",
        image: "assets/img_awkward.png"
    },
    {
        day: 30,
        category: 'Inspiration',
        title: "New Beginnings",
        content: "\"What the caterpillar calls the end of the world, the master calls a butterfly.\" - Richard Bach",
        image: "assets/img_inspiration.png"
    },
    {
        day: 31,
        category: 'Support',
        title: "Happy New Year",
        content: "You survived the holidays. You are resilient. Here's to a new year of being kind to yourself.",
        image: "assets/img_support.png"
    }
];
