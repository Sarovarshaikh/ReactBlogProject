import React, { createContext, useState } from "react";

export const store = createContext();

const Data = (props) => {
    const [data] = useState([
        {
            id: 1,
            image: "https://www.filmfare.com/media/content/2022/sep/kareenakapooranushkasharma61663312307.jpg",
            title: "What a legacy: Kareena Kapoor Anushka Sharma and others react to Roger Federers retirement news",
            description: "On Thursday, tennis star Roger Federer made an announcement revealing that he will retire after the Laver Cup in London. He shared the news on social media with a post .",
            body: `On Thursday, tennis star Roger Federer made an announcement revealing that he will retire after the Laver Cup in London. He shared the news on social media with a post that read,  “I am 41 years old, I’ve played more than 1,500 matches over 24 years. Tennis has treated me more generously than I ever would have dreamt and now I must recognise when it is time to end my competitive career."
            After Federer's retirement announcement, the internet was flooded with sweet messages as fans congratulated him for his impressive sports career. Among those reacting to the news were Bollywood celebrities. Anushka Sharma shared the news on her Instagram story and wrote, "Genius". Roger Federer has had a career full of memorable wins including his first grand slam in 2003 and earning the Wimbledon title. In his note, he also assured fans that he will continue to play tennis. “The Laver Cup next week will be my final ATP event. I will play more tennis in the future of course but just not in grand slams or on the tour." he shared.`,
            category:"Bollywood",
            date: "September 18, 2022"
        },
        {
            id: 2,
            image: "https://filmfare.wwmindia.com/content/2022/sep/saitamhankar31663584318.jpg",
            title: "Sai Tamhankar and Emraan Hashmi come on board for Tejas Deoskar next - Ground Zero",
            description: "Tejas Deoskar's next Ground Zero is currently being shot in Kashmir which has Emraan Hashmi and Sai Tamhankar in the lead along with Zoya Hussain.",
            body: `A source revealed that Saie Tamhankar and Emraan Hashmi's movie is called 'Ground Zero'. It is being produced by Excel Entertainment. Infact the actress has signed another movie with them called 'Agni' where she stars opposite Scam 1992 actor Pratik Gandhi. Saie has been a true underdog in the industry and is a big name in Marathi cinema. She is finally getting her due in Bollywood and we deserve to see more of her talent on screen.
            It is interesting to see a fresh pairing onscreen as this is the first time Emraan Hashmi and Sai Tamhankar have been paired opposite each other. According to a quote from Times Of India, their onscreen chemistry is quite refreshing, "Sai is playing Emraan's wife in the film. The two got along during the prep for the movie. They share an amazing chemistry as a couple on camera."
            Sai Tamhankar has been enjoying a career-high recently with bagging the Filmfare Award for Best Actor in a Supporting Role (Female) for Mimi, she has an interesting lineup to look forward to which includes Madhur Bhandarkar's next - India Lockdown and her next Marathi film - Fakt Mahilansathi.`,
            category:"Bollywood",
            date: "September 10, 2022"
        },
        
        {
            id: 3,
            image: "https://filmfare.wwmindia.com/content/2022/sep/kartikaaryan31662358687.jpg",
            title: "Kartik Aaryan to star in Aashiqui 3. Shares first look",
            description: 'Kartik Aaryan has been making headlines for all the right reasons. The actor has now announced that he is set to star in Aashiqui 3. Directed by Anurag Basu, the film is the third instalment of Aashiqui.',
            body: `Kartik Aaryan has been making headlines for all the right reasons. The actor has now announced that he is set to star in Aashiqui 3. Directed by Anurag Basu, the film is the third instalment of Aashiqui.
            Kartik Aaryan took to his social media handle to share the news and a brief glimpse of the film's title. He captioned the tweet, “Ab Tere Bin Ji Lenge Hum/ Zeher Zindagi Ka Pi Lenge Hum #Aashiqui3/ This one is going to be heart-wrenching !!/ My First with Basu Da"
            As per reports on Variety, Kartik Aaryan opened up about Aashiqui 3 saying that it's a "dream come true". He said, "I feel privileged yet grateful for collaborating with Bhushan Kumar and Mukesh Bhatt for this opportunity. I’ve been a big fan of Anurag Basu’s work and collaborating with him on this one will definitely shape me in many ways.”
            The first film which arrived in 1990 was directed by Mahesh Bhatt and featured Rahul Roy and Anu Aggarwal. The second installment starring Shraddha Kapoor and Aditya Roy Kapur helmed by Mohit Suri released in 2013.
            Kartik Aaryan was last seen in Bhool Bhulaiyaa 2. Apart from Aashiqui 3, the actor will next be seen in Shehzada alongside Kriti Sanon and in SatyaPrem Ki Katha with Kiara Advani. Filming for the project is underway.`,
            category:"Bollywood",
            date: "September 14, 2022"
        },
        {
            id: 4,
            image: "https://www.filmfare.com/media/content/2022/sep/shahrukhkhan41663157014.jpg",
            title: "Ayan Mukerji hints there might be a Brahmastra spin-off starring Shah Rukh Khan",
            description: "Brahmastra, one of Ayan Mukerji's most costly films, is among the most expensive works of Indian cinema. The movie, which had a whopping 400 crore budget, featured Ranbir Kapoor, Alia Bhatt, Amitabh Bachchan, Mouni Roy, and Nagarjuna in significant parts. But Shah Rukh Khan's presence generated a lot of excitement among the audience, and now everyone is demanding a spin-off!",
            body: `Brahmastra, one of Ayan Mukerji's most costly films, is among the most expensive works of Indian cinema. The movie, which had a whopping 400 crore budget, featured Ranbir Kapoor, Alia Bhatt, Amitabh Bachchan, Mouni Roy, and Nagarjuna in significant parts. But Shah Rukh Khan's presence generated a lot of excitement among the audience, and now everyone is demanding a spin-off!
            Shah Rukh Khan who played Vanarastra and took on the persona of Mohan Bhargav, a scientist, only had a short stint during the movie. But his role won the audience's hearts and left them asking for more. Supporters of SRK started posting online petitions calling for a spin-off of his character.
            Ayan Mukerji, the director of Brahmastra, has finally addressed the topic and revealed “Before the fans were saying it, we were also saying that ourselves. When we were shooting the sequence in 2019, we were also talking on sets. As we discovered the personality of the scientist, we said, ‘Yaar, we have to do stuff. We have to do the origin story of the scientist!
            Shah Rukh Khan's role in Brahmastra, according to Ayan Mukerji, was not intended to be limited to a cameo, and his team too was pushing for more.“We were also vibing on that frequency, my assistants and I. So, I guess my response to the spin-off demand is that: We  are already thinking about it. We are hearing everything and are planning our next moves,” he added.
            Even Deepika Padukone is reportedly a part of the Brahmastra franchise, in addition to Shah Rukh Khan. Who will play the main character Dev in the future franchise is still a big mystery. One of the names that is getting a lot of attention is Ranveer Singh, and we can't wait to see who it turns out to be.`,
            category:"Bollywood",
            date: "September 13, 2022"
        },
        {
            id: 5,
            image: "https://www.filmfare.com/media/content/2022/sep/shabanaazmi41663573392.jpg",
            title: "Inside Shabana Azmis Starry Birthday Party. See Pics:",
            description: "On Sunday, Shabana Azmi turned 72. The veteran actress celebrated her birthday with her family and close friends and it was indeed a star-studded party. The get-together was attended by Tabu, Zoya Akhtar, Anil Kapoor, Dia Mirza, Farah Khan, Manish Malhotra, and others.",
            body: `On Sunday, Shabana Azmi turned 72. The veteran actress celebrated her birthday with her family and close friends and it was indeed a star-studded party. The get-together was attended by Tabu, Zoya Akhtar, Anil Kapoor, Dia Mirza, Farah Khan, Manish Malhotra, and others. 
            Manish Malhotra took to his social media handle to share glimpses of Shabana Azmi's birthday party. In one photo, she can be seen posing in a lovely pink ethnic look alongside Malhotra.
            In the next stories, a table full of awards won by Shabana Azmi and Javed Akhtar, including Filmfare Awards can be seen. Another photo sees her posing with Dia Mirza.
            On Sunday, Farhan Akhtar took to Instagram to share a sweet birthday post for Shabana Azmi. Dropping a photo from his wedding day, he wrote, “Happy Birthday @azmishabana8. Been a fan of your dancing ever since I saw Parvarish and cherish this moment when we finally danced together.
            Shabana Azmi was last seen in the sci-fi TV series Halo. Meanwhile, on the work front, Farhan Akhtar is set to direct Jee Le Zara, a road trip film featuring Katrina Kaif, Alia Bhatt and Priyanka Chopra.`,
            category:"Bollywood",
            date: "September 12, 2022"
        },
        {
            id: 6,
            image: "https://www.filmfare.com/media/content/2022/sep/priyankachoprajonas41663571390.jpg",
            title: "Priyanka Chopra Jonas Offers A Glimpse Of Nick Jonas Birthday. Shares Emotional Note",
            description: "Nick Jonas celebrated his 30th birthday on September 16. His birthday bash took place in Arizona and it was hosted by his actress-wife Priyanka Chopra Jonas. They were joined by their close friends and family including Joe, Kevin and Frankie Jonas.",
            body: `Nick Jonas celebrated his 30th birthday on September 16. His birthday bash took place in Arizona and it was hosted by his actress-wife Priyanka Chopra Jonas. They were joined by their close friends and family including Joe, Kevin and Frankie Jonas.
            Priyanka Chopra took to social media to share a glimpse of Nick Jonas' birthday celebrations. In her wholesome birthday note, she wrote, "Happiest birthday my love. May you always have joy in your life and a smile on your face. I love you @nickjonas. This was a weekend that made my heart so full. It started with wanting to celebrate my husband's 30th but ended up being so much more. All of NJ's friends and family filled the room with so much love and joy. @scottsdalenational you are our home away from home. I cannot thank you all enough for helping me pull off the perfect celebration of an incredible man.
            On the work front, Priyanka Chopra is set to star in the spy thriller series Citadel, romantic drama It's All Coming Back To Me and road trip film Jee Le Zara alongside Alia Bhatt and Katrina Kaif.`,
            category:"Bollywood",
            date: "September 11, 2022"
        },
        {
            id: 7,
            image: "https://www.filmfare.com/media/content/2022/sep/norafatehi41663326293.jpg",
            title: "Sidharth Malhotra and Nora Fatehi raise the temperature in their latest song Manike from Thank God",
            description: "The song  Manike Maga Hithe by Yohani Diloka who is a Sri-Lankan singer went viral on social media in no time because of its catchy tunes. As the trend these days follows remaking trending songs to be featured in films, Sidharth Malhotra's next - Thank God had their first song - Manike released which features him along with the dancing queen - Nora Fatehi.",
            body: `The song  Manike Maga Hithe by Yohani Diloka who is a Sri-Lankan singer went viral on social media in no time because of its catchy tunes. As the trend these days follows remaking trending songs to be featured in films, Sidharth Malhotra's next - Thank God had their first song - Manike released which features him along with the dancing queen - Nora Fatehi.
            The vocals of the song have been given by Yohani Diloka, Surya Ragunnathan, and Jubin Nautiyal. Lyrics have been penned by Rashmi Viraj and Dulan ARX while Chamath Sangeethand and Tanishk Bagchi are the music composers.
            Helmed by Indra Kumar, Thank God is slated to release on October 25 and stars Ajay Devgn, Sidharth Malhotra, and Rakul Preet Singh.`,
            category:"Bollywood",
            date: "September 5, 2022"
        },
        {
            id: 8,
            image: "https://www.filmfare.com/media/content/2022/sep/ranbir-kapoor-41663244499.jpg",
            title: "Ranbir Kapoor And Ayan Mukerji Perform Puja At Somnath Temple Post Brahmastraâs Success",
            description: "It's been a week since Ayan Mukerji’s Brahmastra starring Alia Bhatt and Ranbir Kapoor released, and the response has been overwhelming to say the least. The movie has been on a roll at the box office, and has grossed Rs 285 crore worldwide and is on course to touch the 300 crore milestone in its first week.",
            body: `It's been a week since Ayan Mukerji’s Brahmastra starring Alia Bhatt and Ranbir Kapoor released, and the response has been overwhelming to say the least. The movie has been on a roll at the box office, and has grossed Rs 285 crore worldwide and is on course to touch the 300 crore milestone in its first week.
            Taking to his Instagram, Ayan shared a picture of him alongside Ranbir Kapoor as he visited the Somnath Temple in Gujarat to seek blessings. "Somnath Temple. My Third Jyotirlinga Visit this year. Had told myself I would come here after Brahmastra releases, and am so happy and energised that we made it here!" the caption reads.
            In the viral pictures, Ayan and Ranbir can be seen outside the holy shrine. Ayan Mukerji was seen wearing a yellow pastel kurta with white bottoms, while Ranbir wore a white kurta and pyjama with a blue Nehru jacket.
            The multilingual movie, which was released in Hindi, Tamil, Telugu, Malayalam, and Kannada versions in 2D, 3D, and IMAX 3D is currently running successfully in the theatres.`,
            category:"Bollywood",
            date: "September 15, 2022"
        },
        {
            id: 9,
            image: "https://filmfare.wwmindia.com/content/2022/sep/amitabh-farhan-ranveer-41663652559.jpg",
            title: "Farhan Akhtar on bringing Shah Rukh Khan, Ranveer Singh, and Amitabh Bachchan together for Don 3",
            description: "There have been a lot of speculations being made ever since rumours started floating about Farhan Akhtar working on the script for Don 3. As per an exclusive report on ET Times - it was said that the film was being planned to keep the original don - Amitabh Bachchan and Shah Rukh Khan in mind.",
            body: `There have been a lot of speculations being made ever since rumours started floating about Farhan Akhtar working on the script for Don 3. As per an exclusive report on ET Times - it was said that the film was being planned to keep the original don - Amitabh Bachchan and Shah Rukh Khan in mind. It was also revealed that Ranveer Singh might have a part to play in the hit franchise, however, there have been some latest updates on the script.
            The quote said, “Farhan had an ambitious idea of getting Amitabh Bachchan and Shah Rukh Khan together in the third installment. Interestingly, Bachchan saab was the lead in the original Don (1978). It had a different ending and showed the good-natured Vijay surviving and Don dying, while SRK’s version showed vice versa. Hence, it’s not clear whether or not Big B was supposed to play the role from the original version. However, Farhan definitely had thought of casting Amitabh Bachchan and Shah Rukh Khan in Don 3.”
            Earlier, as quoted on a leading entertainment portal, Farhan Akhtar had always gone on record to say he is working on the script. Along with planning to bring Amitabh Bachchan on board, he was also writing a supposed cameo role for Ranveer Singh where Shah Rukh would be seen passing the lineage onto him and be featured in the future installments as the story is carried forward.
            Farhan hasn't confirmed any of these remarks as of yet.`,
            category:"Bollywood",
            date: "September 16, 2022"
        },
        {
            id: 10,
            image: "https://filmfare.wwmindia.com/content/2022/sep/akshaykumar121662710494.jpg",
            title: "Decoding Akshay Kumar: We break down the evolution of Khiladi Kumar on his birthday",
            description: "Akshay Kumar has demonstrated over the course of a 30-year career that he is the undeniable superstar of the Hindi film industry driven by perseverance, focus, and dedication. The actor has a huge fan base that supports him not only in his films but also in all his efforts to promote various causes.",
            body: `Akshay Kumar has demonstrated over the course of a 30-year career that he is the undeniable superstar of the Hindi film industry driven by perseverance, focus, and dedication. The actor has a huge fan base that supports him not only in his films but also in all his efforts to promote various causes. With the love of his fans and his undeniable charm, he's truly the binary superstar of Bollywood.
            Besides having done numerous films over the years, the actor has also championed social problems, managed to speak up for women's rights and offer martial arts self-defense classes to women. 
            Even as an actor, there is no field he hasn't explored. Right from action, comedy, romance, biopic, you name it, and Akshay Kumar has not just done it in his film career, but also aced them by breaking box office records!
            Today on the occasion of his 55th, we are deciphering Akshay's path to becoming Bollywood's "ideal all-rounder"- or, as they like to say, "One man, many roles"!
            Action 
            With Saugandh, Akshay made his Hindi film debut in 1991. However, it was his performance in the suspenseful drama Khiladi a year later that changed everything for him. It was that movie that gave him the title of “Khiladi of Bollywood.” and showcased his quick movements, action hero demeanour, and careful martial actors sequences. These earned him accolades and he gained a lot of popularity as the ultimate action hero of bollywood. His proficiency in martial arts was also highlighted by later films like Deedar, Insaaf, Daava, Barood, Zulmi, and Jaanwar, among many more.
            Rowdy Rathore, in which Akshay Kumar plays a double role is one of his most famous action films that made it to the 100 crore club and also had everyone copying his moves. Holiday, which is a remake of Tamil Film Thuppakki features Akshay Kumar as a captain in the DIA, chasing goons and saving the city from bomb blasts. The stylized action in the movie won praise. The climactic scene where Akshay destroys Freddy Daruwala and his goons, makes the ticket completely worth the price.
            More recent releases like Boss, Gabbar Is Back, Singh Is Kinng, Tashan and more recent hits like Bachchhan Pandey are also action-comedy movies where Akshay Kumar has showcased his skills effortlessly.
            Comedy While the audience was enjoying the "Khiladi's" action-oriented portrayal, Akshay had moved onto the comedy genre as a means of changing the action hero stereotype. He always spoke about the significance of reinventing oneself, saying that an actor can only grow and learn when he experiments.`,
            category:"Bollywood",
            date: "September 17, 2022"
        },
        {
            id: 11,
            image: "https://cdn.vox-cdn.com/thumbor/Q49NC4RoLHL09dhkbcIYep5Fjd4=/0x0:2040x1360/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/71388804/226270_iPHONE_14_PHO_akrales_0724.0.jpg",
            title: 'Apple’s fixing the iPhone 14 Pro’s camera shake',
            description: "Apple will release a software update to fix an issue with the iPhone 14 Pro and Pro Max where using the camera in third-party apps like Snapchat, Instagram, or TikTok would lead to a shaking image and grinding or buzzing noises coming from the camera bump.",
            body: `Apple will release a software update to fix an issue with the iPhone 14 Pro and Pro Max where using the camera in third-party apps like Snapchat, Instagram, or TikTok would lead to a shaking image and grinding or buzzing noises coming from the camera bump. The company is “aware of the issue and a fix will be released next week,” according to a statement emailed to The Verge by Apple spokesperson Alex Kirschner. 
            When reports of the bug started hitting over the weekend, it wasn’t clear if the issue was with the third-party apps themselves or with iOS 16, though the cameras functioned just fine in Apple’s own app. Given that it’s Apple releasing an update, it appears that the issue is with the iPhone and its APIs rather than the third-party apps.
            Snapchat, Instagram, and TikTok may need to issue a special update for the iPhone 14 Pro. Even then, there is no clear picture of what type of harm (if any) this does to the camera itself, which is concerning given that this is very expensive and up equipment.
            Some users turned to Twitter to share their experiences, including videos of how the phone acted when using applications like TikTok. The phone practically shook in their hands, and it also became stuck. `,
            category:"Technology",
            date: "September 19, 2022"
        },
        {
            id: 12,
            image: "https://cdn.vox-cdn.com/thumbor/ooV4bAajGYDhSBWW21ekwD-diuY=/0x0:2040x1360/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/71389829/vpavic_4275_20201030_0033.0.jpg",
            title: 'Microsoft eased up on one DRM hurdle for disc games on Xbox',
            description: "Microsoft is making it easier to play games on your Xbox Series X, even if it’s offline — as of the 2208 update released earlier this month, you won’t be forced to do an online compatibility check to play a game from an Xbox One disc (via Windows Central). Instead, you can just pop the disc in, install the game, and play; no internet connection required.",
            body: "YouTuber Hikikomori Media has a good breakdown of what the situation was before, but the TL;DR is that there’s kind of a mixed bag when you buy Xbox games on disc. Some will be branded as Xbox One games, which obviously contain the version of the game meant for Microsoft’s last-gen consoles. Other games, however, are branded as working with both the Xbox Series X and Xbox One (the Xbox Series S doesn’t have an optical disc drive to insert games into) — but sometimes, the version of the game on the disc is for the Xbox One. Before the update, you’d have to be online to finish installing these games, so your Xbox could download info that allowed them to work with the newer console.Now, you’ll be able to install the Xbox One version of the game straight from the Xbox One or cross-generation disc and start playing it. Of course, if you want to download any updates or enhancement packs for the Series X, you will still have to go online. You’ll also have to go online to play games that don’t have all of the install data available on the disc. Those caveats mean its not a full-on victory for game preservation, but in theory if Microsoft ever shut down its servers, you should still at least be able to play the version of the game you have on disc.",
            category:"Technology",
            date: "September 20, 2022"
        },
        {
            id: 13,
            image: "https://cdn.vox-cdn.com/thumbor/1EDB22U_kjKGk_pc8MIrwgTKTqA=/0x0:1080x720/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/71389659/telegram_emoji_reactions.0.jpeg",
            title: "Emoji statuses and ‘infinite’ reactions are among Telegram’s latest features",
            description:"Paying Telegram Premium subscribers can now use all animated emoji as a status, in addition to the default seven that can change colors based on the theme.",
            body: "Telegram’s throwing a bone to its non-premium users this month by extending them access to more emoji reactions. The feature now lets all users choose from “dozens” of emoji that they can drop onto message bubbles as an alternative way to contribute to the conversation. And if you’re paying the $4.99 a month for Premium, don’t worry, you’re now getting an endless supply of reaction options by way of the custom animated emoji packs released last month, as well as other new features.Paying Telegram Premium subscribers can now use all animated emoji as a status, in addition to the default seven that can change colors based on the theme. For instance, you can choose a rotating controller emoji to indicate you’re busy fragging on your Xbox. It’ll appear in friends’ chat lists, groups, and on your profile page in place of the normal Premium badge, which is also where you would tap to apply the status.There’s also a better login system now for “users who log out and log back in frequently” that can send a temporary code to your email address or can utilize Sign In with Apple or Google. Users on iOS will notice that the user interface for logging in has improved and includes the “fun animations” that Android users have already been enjoying.",
            category:"Technology",
            date: "September 20, 2022"
        },
        {
            id: 14,
            image: "https://s.yimg.com/os/creatr-uploaded-images/2022-09/27c0fcf0-3858-11ed-bded-16658e66bf92",
            title: "James Webb Space Telescope's first pictures of Mars could reveal more about the atmosphere",
            description:"The James Webb Space Telescope is still snapping its first pictures of Solar System planets, and the latest batch could be particularly useful. NASA and the ESA have shared early images of Mars, taken on September 5th, that promise new insights into the planet's atmosphere.",
            body:"The James Webb Space Telescope is still snapping its first pictures of Solar System planets, and the latest batch could be particularly useful. NASA and the ESA have shared early images of Mars, taken on September 5th, that promise new insights into the planet's atmosphere. Data from the near-infrared camera (NIRCam) is already offering a few surprises. For starters, the giant Hellas Basin is oddly darker than nearby areas at the hottest time of the day, NASA's Giuliano Liuzzi and Space.comnoted — higher air pressure at the basin's lower altitude has suppressed thermal emissions.The JWST imagery also gave space agencies an opportunity to share Mars' near-infrared atmospheric composition using the telescope's onboard spectrograph array. The spectroscopic 'map' (pictured at middle) shows the planet absorbing carbon dioxide at several different wavelengths, and also shows the presences of carbon monoxide and water. A future research paper will provide more detail about the Martian air's chemistry. It was particularly tricky to record the images. Mars is one of the brightest objects the James Webb telescope can see — a problem for an observatory designed to study the most distant objects in the universe. Researchers countered this by capturing very short exposures and using special techniques to analyze the findings.This is only the initial wave of pictures and data. It will take more observations to reveal more about Mars. However, the spectral info already hints at more information about the planet's materials. Liuzzi also thinks JWST studies could settle disputes over the presence of methane on Mars, potentially signalling that the Red Planet harbored life in its distant past.",
            category:"Technology",
            date: "September 10, 2022"
        },
        {
            id: 15,
            image: "https://techcrunch.com/wp-content/uploads/2022/09/07edb091bb329145ee3f3f01476adb40acc6457b.jpg?w=711",
            title: "Rockstar confirms gigantic 'Grand Theft Auto VI' leak",
            description:'That purported Grand Theft Auto VI leak appears to be real. Rockstar Games has confirmed the authenticity of the leak in a tweet, noting that a hacker stole confidential data including "early development footage" of the next Grand Theft Auto title.',
            body:`That purported Grand Theft Auto VI leak appears to be real. Rockstar Games has confirmed the authenticity of the leak in a tweet, noting that a hacker stole confidential data including "early development footage" of the next Grand Theft Auto title. The firm didn't foresee any long-term damage to development or live services like GTA Online, but was "extremely disappointed" that details of the future game were shared in this manner, Rockstar promised another update "soon," and that creation of GTA VI would continue "as planned." The game producer didn't share more. However, Windows Centralnotes parent company Take Two has asked original leak host GTAForums to pull content, which reportedly includes Bully 2 plans and might include code for multiple GTA titles. The hacker's original Telegram channel has disappeared. The leak is unprecedented and included 90 videos of a very early build of GTA VI. The clips appear to validate rumors from July that hinted at a return to Vice City (aka Miami) as well as a Bonnie and Clyde-like pair of male and female protagonists. There also appears to be a slew of functional upgrades ranging from improved animations to a robbery system. The GTA VI material might not do much damage, as the finished product is likely to be much more polished. However, there is a concern that any code for GTA Online could make it easier for hackers to exploit vulnerabilities and otherwise sour the game for other players.`,
            category:"Technology",
            date: "September 18, 2022"
        },
        {
            id: 16,
            image: "https://techcrunch.com/wp-content/uploads/2020/09/GettyImages-518949541.jpg?w=532",
            title: `Ethereum drops more than 17% after ‘way overhyped’ Merge`,
            description:'Four days ago, just a few minutes before 3 a.m. EDT, a long-anticipated upgrade to Ethereum was executed. Since then, the second most valuable blockchain’s cryptocurrency, ETH, has tumbled — and some are saying its price hasn’t bottomed out yet.',
            body:`Four days ago, just a few minutes before 3 a.m. EDT, a long-anticipated upgrade to Ethereum was executed. Since then, the second most valuable blockchain’s cryptocurrency, ETH, has tumbled — and some are saying its price hasn’t bottomed out yet. When the upgrade, generally referred to as “the Merge,” transpired, ETH was priced at about $1,600. At the time of publication, ETH is worth about $1,327 down just over 17% from the landmark system change.
            “The FOMO and speculation around the Merge are done, and it’s back to business as usual for most in the space.” Flux co-founder Daniel Keller
            Over the past several months, speculation has centered around whether ETH would be accepted post-Merge, Daniel Keller, co-founder of a decentralized cloud infrastructure Flux, told TechCrunch. Since Ethereum moved from proof-of-work (PoW) to proof-of-stake (PoS), it left its crypto miners “behind” in the transition, he added.
            “Did they alienate a core demographic and remove one of the best parts of decentralization? I think we see the direct impact of that speculation to the downside,” Keller said.
            Ethereum drops more than 17% after ‘way overhyped’ Merge by Jacquelyn Melinek originally published on TechCrunch`,
            category:"Technology",
            date: "September 17, 2022"
        },
        {
            id: 17,
            image: "https://media.threatpost.com/wp-content/uploads/sites/103/2020/03/02145658/nvidia.jpg",
            title: `Nvidia ‘GeForce Beyond’: live coverage of RTX 4090 launch and more`,
            description:'Nvidia is expected to announce the RTX 4090, the first GPU in its next generation of graphics cards today. This “GeForce Beyond” presentation is part of the larger GTC 2022 keynote, which will cover topics beyond just PC graphics.',
            body:`Nvidia is expected to announce the RTX 4090, the first GPU in its next generation of graphics cards today. This “GeForce Beyond” presentation is part of the larger GTC 2022 keynote, which will cover topics beyond just PC graphics. Nvidia CEO Jensen Huang is expected to address topics across the company’s line of cloud and AI services available to applications such as robotics and self-driving cars, as well as highlight the company’s work in powering the technology behind the metaverse.
            It all kicks off at 8 a.m. PT today, so make sure to come here for the latest updates from Nvidia or watch the RTX 4090 event live.`,
            category:"Technology",
            date: "September 15, 2022"
        },
        {
            id: 18,
            image: "https://img-cdn.tnwcdn.com/image?fit=796%2C417&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F09%2FUntitled-design-2-1.jpg&signature=c338efe7fdccf99c49c38503c7cf2c30",
            title: `Macron’s dream of a European metaverse is far from a reality`,
            description:'European businesses, investors, and talent are all vying for a ticket on the metaverse hype train. Even political heavyweights are making moves — or, at least, pronouncements.',
            body:`European businesses, investors, and talent are all vying for a ticket on the metaverse hype train. Even political heavyweights are making moves — or, at least, pronouncements.
            French President Emmanuel Macron wants to build “a European metaverse” to challenge US and Chinese tech giants. The EU’s digital chief, Margrethe Vestager, meanwhile, is mulling new antitrust regulation. But their ambitions are a long way from being realized.
            “The reality is there is no European big tech player of relevance in that whole metaverse future,” says Rolf Illenberger, the cofounder of Munich’s VRdirect, a virtual reality platform for enterprises. “It’s being defined by US and Asian players. Those are the two regions where this technology is going to develop.”
            In the US, the tech titans of Meta, Microsoft, and Apple are set for leading roles, while Roblox and Decentraland already offer popular proto-metaverse platforms. 
            Their biggest global challengers are based in Asia. Bytedance, the owner of TikTok and VR hardware giant Pico, is the strongest contender, but further competition is emerging at the likes of Huawei, Tencent, and the Sandbox virtual world.`,
            category:"Technology",
            date: "September 14, 2022"
        },
        {
            id: 19,
            image: "https://img-cdn.tnwcdn.com/image?fit=796%2C417&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F09%2FUntitled-design-95.jpg&signature=7b40122edaa0d3f094b23c99aa02112c",
            title: `Researchers train AI to predict EV battery degradation`,
            description:'Lithium-ion batteries have become a key component in the rise of electric mobility, but forecasting their health and lifespans is limiting the technology.',
            body:`Lithium-ion batteries have become a key component in the rise of electric mobility, but forecasting their health and lifespans is limiting the technology. While they’ve proven successful, the capacity of lithium-ion batteries degrades over time, and not just because of the ageing process that occurs during charging and discharging — known as “cycling ageing.” Batteries also degrade when not in use Lithium-ion battery cells also suffer degradation from so-called “calendar ageing,” which occurs during storage, or simply when the battery is not in use. It’s determined by three main factors: the rest state of charge (SOC), the rest temperature, and…`,
            category:"Technology",
            date: "September 04, 2022"
        },
        {
            id: 20,
            image: "https://img-cdn.tnwcdn.com/image?fit=796%2C417&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F08%2FUntitled-design-6.jpg&signature=34a4084c1da02f914ff9baa7b9a55262",
            title: `Researchers in Italy and Germany unveil neuromorphic approach to robotics`,
            description:`Scientists have tapped neuromorphic computing to keep robots learning about new objects after they’ve been deployed.
            For the uninitiated, neuromorphic computing replicates the neural structure of the human brain to create algorithms that can deal with the uncertainties of the natural world.`,
            body:`Loihi is comprised of around 130,000 artificial neurons, which send information to each other across a “spiking” neural network (SNN). The chips had already powered a range of systems, from an smart artificial skin to an electronic “nose” that recognizes scents emitted from explosives.
            Intel Labs this week unveiled another application. The research unit teamed up with the Italian Institute of Technology and the Technical University of Munich to deploy Loihi in a new approach to continual learning for robotics.
            The method targets systems that interact with unconstrained environments, such as future robotic assistants for healthcare and manufacturing.
            Existing deep neural networks can struggle with object learning in these scenarios, as they require extensive well-prepared training data — and careful retraining on new objects they encounter. The new neuromorphic approach aims to overcomes these limitations.
            The researchers first implemented an SNN on Loihi. This architecture localizes learning to a single layer of plastic synapses. It also accounts for different views of objects by adding new neurons on demand.
            As a result, the learning process unfolds autonomously while interacting with the user.`,
            category:"Technology",
            date: "August 31, 2022"
        },
        {
            id: 21,
            image: "https://i.guim.co.uk/img/media/76c5b0ec79916153c6ac8dbbae6d8fa6af81ad3f/0_117_3500_2100/master/3500.jpg?width=620&quality=85&fit=max&s=eeb1c802b67d2647b2b669b8dbed9675",
            title: "Woody Allen denies reports of retirement as he shoots his 50th film",
            description:'Allen, 86, had been speaking to La Vanguardia before the filming of his new project, currently titled Wasp 22, in Paris. The newspaper had quoted him as saying: “My idea, in principle, is not to make more movies and focus on writing”, adding that his next project was a novel.',
            body:`Woody Allen has denied reports that he is retiring, after a widely circulated article in a Spanish newspaper quoted him as saying his current film would be his last.
            Allen, 86, had been speaking to La Vanguardia before the filming of his new project, currently titled Wasp 22, in Paris. The newspaper had quoted him as saying: “My idea, in principle, is not to make more movies and focus on writing”, adding that his next project was a novel.
            A statement issued on behalf of the film-maker said: “Woody Allen never said he was retiring, nor did he say he was writing another novel. He said he was thinking about not making films, as making films that go straight or very quickly to streaming platforms is not so enjoyable for him, as he is a great lover of the cinema experience. Currently, he has no intention of retiring and is very excited to be in Paris shooting his new movie, which will be the 50th.”
            La Vanguardia also quoted Allen as saying that Wasp 22 would be “similar to” his 2005 film Match Point, and would be “exciting, dramatic and also sinister”.
            In June, Allen had expressed his disillusion with the film-making process in an Instagram Live interview with actor Alec Baldwin saying: “A lot of the thrill is gone. Now you do a movie and you get a couple of weeks in a movie house, and then it goes to streaming or pay per view. It’s not the same. It’s not as enjoyable to me.”
            Allen’s four-picture deal with Amazon Studios collapsed in 2018 in the fallout from renewed attention around allegations by the director’s adopted daughter, Dylan Farrow, that he had sexually abused her. Allen has always denied the allegation; two investigations were closed with no charges being brought against him.
            Allen’s memoir Apropos of Nothing was subsequently dropped by publishers Hachette, but was picked up and published by Arcade in 2020. Arcade also published Zero Gravity, his new collection of short stories.`,
            category:"Hollywood",
            date: "September 19, 2022"
        },
        {
            id: 22,
            image: "https://i.guim.co.uk/img/media/3beb74f5e776fe46dc1f073f5e65695df4e32b1c/0_44_2000_1199/master/2000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=11a3a97ac32add2cf450c84dc0ce94d9",
            title: "Spielberg’s The Fabelmans wins Toronto film festival People’s Choice award",
            description:`Director’s most autobiographical film to date picks up audience prize generally seen as indicator of awards success to come. Steven Spielberg’s new film The Fabelmans has won the Toronto international film festival’s People’s Choice award, long regarded in the film industry as a key indicator of awards success over the next few months.`,
            body:`Steven Spielberg’s new film The Fabelmans has won the Toronto international film festival’s People’s Choice award, long regarded in the film industry as a key indicator of awards success over the next few months.
            The Fabelmans, directed by Spielberg and co-written with Angels in America playwright Tony Kushner, has been hailed as Spielberg’s most autobiographical film and has won generally admiring reviews. The story of a teenage boy coping with his parents’ disintegrating marriage in the 60s midwest, the Guardian described it as a “rare insight into the world’s most famous director who has usually kept us at arm’s length”.
            Recent winners of the award include the Kenneth Branagh-directed Belfast, and best picture Oscar winners Nomadland and Green Book. Spielberg, whose films rarely play in the competitive sections of film festivals, professed himself delighted to win the award, which is voted on by Toronto’s audience members. He said: “This is the most personal film I’ve ever made, and the warm reception from everyone in Toronto made my first visit to [the Toronto film festival] so intimate and personal … and a very special thank you to all the movie fans in Toronto who have made this past weekend one I’ll never forget.”`,
            category:"Hollywood",
            date: "September 20, 2022"
        },
        {
            id: 23,
            image: "https://www.indiewire.com/wp-content/uploads/2022/09/GettyImages-1423454878.jpg",
            title: "Peacock Isn’t a Competitive Streamer: Here’s 3 Things Comcast Can Change",
            description:`Comcast is looking forward to 2024, a year in which it will gain: A) Hulu or B) a boatload of money, based on Hulu’s huge valuation. There’s also C): It could buy another significant media company, a purchase possibly financed in part by B. And let’s face it: NBCU needs one of those outcomes to compete in the streaming wars. With or without next-day NBC episodes, Peacock is no contender for the crown.`,
            body:`Comcast is looking forward to 2024, a year in which it will gain: A) Hulu or B) a boatload of money, based on Hulu’s huge valuation. There’s also C): It could buy another significant media company, a purchase possibly financed in part by B. And let’s face it: NBCU needs one of those outcomes to compete in the streaming wars. With or without next-day NBC episodes, Peacock is no contender for the crown.
            In January 2024, Comcast will likely sell its 33 percent ownership interest in Hulu to Disney. According to a deal the companies made in 2019, Hulu is valued at a guaranteed minimum of $27.5 billion. Disney’s two-thirds ownership share has a baseline value of $18 billion with NBCU’s third at $9 billion, but only Disney contractually has to buy its partner out.
            At last week’s Goldman Sachs’ Communacopia event, Comcast CEO Brian L. Roberts pushed an alternate alternative: What if the seller becomes the buyer? 
            “If [Hulu] was for sale, put up for sale, Comcast would be interested, and so would a lot of other tech and media companies,” Roberts said. “And you would have robust auction. There’s never been a pure-play, fabulous, scaled streaming service put on the market.”
            Fabulous! And also? Unlikely. At $18 billion, that would be a very pricey buy for Comcast. Any non-Disney buyers would almost certainly no longer have access to ABC or the FX on Hulu content, and given the overall Hulu valuation of $27.5 billion (set by the owners, not necessarily the market), it’s a bid that only a trillion-dollar company would — or at least should — really consider. Amazon, which just ingested MGM, has Prime Video; Apple seems to prefer a small-scale approach; Microsoft and YouTube owner Alphabet seem unlikely to move into a very crowded streaming space that’s already ripe for consolidation. That places Roberts’ claim of Comcast interest somewhere between a threat and a shrewd negotiating tactic.`,
            category:"Hollywood",
            date: "September 20, 2022"
        },
        {
            id: 24,
            image: "https://www.indiewire.com/wp-content/uploads/2022/09/bid_prod102air101_md_00063rt.jpg",
            title: "Hulu’s Pizza Reality Show ‘Best in Dough’ Doesn’t Rise to the Occasion",
            description:`Gone are the days where it was just “Survivor,” “American Idol,” and “The Bachelor” — three giants that still loom but have spawned dozens of imitators in the past 20 years. Any new show in the genre must now not only crown a winner, but set itself apart in order to make a lasting impression.`,
            body:`Gone are the days where it was just “Survivor,” “American Idol,” and “The Bachelor” — three giants that still loom but have spawned dozens of imitators in the past 20 years. Any new show in the genre must now not only crown a winner, but set itself apart in order to make a lasting impression.
            Enter Hulu’s “Best in Dough,” a pizza making competition series hosted by Bachelor Nation’s Wells Adams. In each 30-minute episode Adams, along with Chef Daniele Uditi and a third guest judge, review pizzas made by various groups: Italian nonnas, social media influencers, grill masters, and more. These groups don’t compete with each other, but amongst themselves, which is a missed opportunity for the crazy chemistry of nonnas chiding college students or independent pizza makers facing off with pizza establishments. Chemistry between competitors is what pops on so many reality cooking shows, and in the three episodes screened for critics, “Best in Dough” doesn’t sit in that enough.
            At present, Hulu’s nonfiction originals are nearly all documentary or similar, except for one reality juggernaut: “The Kardashians.” “Best in Dough”s closest cousin is “Baker’s Dozen,” the Cooking Channel series where 13 bakers try to wow the judges with pastry confections. “Best in Dough” feels very much like Hulu trying to tap into the loyal audience of the Cooking Channel, Food Network, and Netflix’s “Great British Baking Show” — the OG in an ever-widening field.`,
            category:"Hollywood",
            date: "September 18, 2022"
        },
        {
            id: 25,
            image: "https://www.indiewire.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-12-at-1.43.00-PM.png",
            title: "Top Gun: Maverick’ Shares #1 VOD Glory in Fourth Week with Two Unlikely Contenders",
            description:`So much for the anticipated lengthy #1 run for “Top Gun: Maverick” (Paramount/$19.99). In its fourth week of VOD availability, the film is down to leading just one of the three charts (Google Play) we follow weekly. Surprising interest for “Beast” (Universal/$19.99) saw the modest grossing ($31 million) horror film rise to head Vudu’s revenue-based chart its second week out, while “Where the Crawdads Sing” (Sony/$5.99) was boosted by an early price reduction, including leading at iTunes.`,
            body:`So much for the anticipated lengthy #1 run for “Top Gun: Maverick” (Paramount/$19.99). In its fourth week of VOD availability, the film is down to leading just one of the three charts (Google Play) we follow weekly. Surprising interest for “Beast” (Universal/$19.99) saw the modest grossing ($31 million) horror film rise to head Vudu’s revenue-based chart its second week out, while “Where the Crawdads Sing” (Sony/$5.99) was boosted by an early price reduction, including leading at iTunes.
            But “Maverick” is hardly flailing with #2 positions at Vudu and iTunes. Still, neither of the two titles replacing it might have seemed likely contenders to dethrone it.
            This week saw notable showings for three leading studios, each suggesting how home play of theatrical releases and windows are still evolving. That includes the current Netflix top ten, which shows how two of them — Sony and Universal — continue to bolster the dominant streaming site.
            Sony is prominent in three different ways this week, all having significance. Although it has been the most conservative studio with windows over the last two years, it released “The Invitation” ($19.99) in an unrated version after the horror film’s third weekend, similar to what Universal does. The modest performing film didn’t soar, with only one top ten showing (iTunes, #10), though just missing at Vudu and #15 at Google Play.`,
            category:"Hollywood",
            date: "September 19, 2022"
        },
        {
            id: 26,
            image: "https://www.indiewire.com/wp-content/uploads/2022/09/cassandra-ciangherotti.jpg",
            title: "How the Design of ‘Los Espookys’ Season 2 Makes the Series Magic",
            description:`Any description of “Los Espookys” will ultimately come up lacking, because the English language cannot create vibes that ring out with the coolness, vitality, and weirdly fused nerd-punk energy of “Los Espookys.”`,
            body:`Any description of “Los Espookys” will ultimately come up lacking, because the English language cannot create vibes that ring out with the coolness, vitality, and weirdly fused nerd-punk energy of “Los Espookys.” The HBO comedy has the same sense of care and texture and human creativity as hand-drawn animation, which is not to say that it looks unreal. But there’s a heightened quality to its visuals that perfectly matches who the characters are and the spirit of the show’s humor. You can tell the Los Espookys crew and even the hound-dog parking attendant Tico (Fred Armisen) are of, and have power over, their unnamed Latin American home. The costumes and the production design are central to creating the look and feel of Julio Torres, Ana Fabrega, and Armisen’s series about (if we must reduce it to a plot) a group of friends who run an agency that solves peoples’ problems with spooky live theater.
            The world of “Los Espookys” is one that production designer Jorge Zambrano needs to build from scratch, not just for every season but for every set and location. “From props and decor, costume design, everything is new,” Zambrano told IndieWire. “Julio told me how they work in the States and it’s very different from the way we work here [in Chile]. We have to self-make everything, mostly. So it’s a little bit of challenge the whole time.”`,
            category:"Hollywood",
            date: "September 20, 2022"
        },
        {
            id: 27,
            image: "https://www.indiewire.com/wp-content/uploads/2022/08/Banshees-IWExclu.jpg",
            title: "Fall Festival 2022 Standouts: The 15 Best Films from Venice, TIFF, and Telluride",
            description:`With the first flush of fall festivals behind us — we’re talking the triple whammy of Venice, Telluride, and Toronto — and the New York Film Festival just on the horizon, we’re taking stock of the best films of the circuit so far.`,
            body:`With the first flush of fall festivals behind us — we’re talking the triple whammy of Venice, Telluride, and Toronto — and the New York Film Festival just on the horizon, we’re taking stock of the best films of the circuit so far. And while it’s easy to use the fall fests as a window into this year’s awards contenders, of which many debuted over the past few weeks, including Venice winner “All the Beauty and the Bloodshed” and TIFF People’s Choice hit “The Fabelmans,” the festivals have also provided us with some of the best films of 2022, full stop.
            These standouts include everything from the aforementioned winners from Laura Poitras and Steven Spielberg, plus new features from perennial favorites Sarah Polley, Martin McDonagh, Luca Guadagnino, Rian Johnson, Joanna Hogg, Kōji Fukada, and Todd Field. Rising stars aren’t in short supply either, including first narrative features from both Elegance Bratton and Alice Diop that seem likely to endure for years to come. Amongst this selection, words like “gem,” “masterpiece,” and “crowd-pleaser” are thrown around with regularity, but not without real consideration.
            Ahead, we’ve picked out the fifteen best films of the fall festival season we’ve enjoyed in recent days. Many of these films are arriving on a screen, big or small, near you soon, and those release dates are indicated, too. In short: clear your calendars.`,
            category:"Hollywood",
            date: "September 19, 2022"
        },
        {
            id: 28,
            image: "https://www.indiewire.com/wp-content/uploads/2022/09/paddy-considine-milly-alcock-.jpg",
            title: "House of the Dragon’ Episode 5 Shows Why Weddings Should Be Banned in Westeros",
            description:`In 2022, many Americans are getting married later, or not at all, and never do we find ourselves as grateful for this cultural evolution than while watching “Game of Thrones” and “House of the Dragon.”`,
            body:`In 2022, many Americans are getting married later, or not at all, and never do we find ourselves as grateful for this cultural evolution than while watching “Game of Thrones” and “House of the Dragon.”
            Sunday’s “Dragon” episode, “We Light the Day” celebrated the wedding of heir to the Iron Throne Rhaenyra Targaryen (Milly Alcock) to the powerful heir to Driftmark Laenor Velaryon (Theo Nate). The young and decidedly not in love couple are barely even related, a victory in all seven kingdoms, but their nuptials were far from uneventful, and not in a good way.
            Back in “Game of Thrones” Season 1, it was observed that “A Dothraki wedding without at least three deaths is considered a dull affair.” This was uttered at Daenerys’ wedding to Khal Drogo (Jason Momoa), in a scene that very much depicted the nonwhite Dothraki as wild and barbaric. But the citizens of Westeros are no better; over the course of “Thrones” and now “Dragon,” it looks like weddings are the top chosen occasion for violent, vengeful murder.
            The murder in question: An innocent — if petty — Joffrey Lonmouth (Solly McLeod), Laenor’s secret lover. For reasons known only to the departed, he decides to needle Ser Criston Cole (Fabian Frankel) over their shared position as classified royal consorts, which results in Criston beating Joffrey to an actual pulp on the banquet hall floor.`,
            category:"Hollywood",
            date: "September 19, 2022"
        },
        {
            id: 29,
            image: "https://www.slashfilm.com/img/gallery/the-new-karate-kid-movie-wont-be-connected-to-cobra-kai/intro-1663637532.jpg",
            title: "The New Karate Kid Movie Won't Be Connected To Cobra Kai",
            description:`The news was that Sony Pictures has dated a brand new "Karate Kid" movie for June 7, 2024 but beyond that the press release was very vague. No attached cast, writer or director and the bizarre phrase "the return of the original 'Karate Kid' franchise."`,
            body:`The news was that Sony Pictures has dated a brand new "Karate Kid" movie for June 7, 2024 but beyond that the press release was very vague. No attached cast, writer or director and the bizarre phrase "the return of the original 'Karate Kid' franchise." 
            Why is that bizarre? Because the "Karate Kid" franchise has already returned and returned in a big way with the hugely successful streaming series "Cobra Kai," which sees a grown up Daniel LaRusso and Johnny Lawrence coming back together in genuinely unexpected and emotionally complex ways. "Cobra Kai" has wooed fans of the original franchise by playing up the nostalgia while also turning it on its head.
            LaRusso isn't the aw shucks innocent angel he was as a kid and Lawrence has a lot to make up for. Add in a whole new young cast of kids who do some karate business and you have an unlikely streaming success story that is apparently doing gangbuster business for Netflix.
            So, what the hell is this movie? A continuation of "Cobra Kai?" A reboot? A 2018 "Halloween" type of sequel that ignores everything that came before? We still don't know the answer, but we do know we can cross one of those options off.`,
            category:"Hollywood",
            date: "September 18, 2022"
        },
        {
            id: 30,
            image: "https://www.slashfilm.com/img/gallery/roland-emmerich-had-to-resort-to-plan-b-for-moonfalls-zero-gravity-acting-classes/intro-1663624373.jpg",
            title: "Roland Emmerich Had To Resort To Plan B For Moonfall's Zero-Gravity Acting Classes",
            description:`Roland Emmerich's "Moonfall," released in theaters back in February, is an incredibly stupid film. That statement is not meant as a value judgment, but a mere descriptor. It could even be construed as a compliment.`,
            body:`Roland Emmerich's "Moonfall," released in theaters back in February, is an incredibly stupid film. That statement is not meant as a value judgment, but a mere descriptor. It could even be construed as a compliment. As overwrought, visually busy, dunderheaded disaster blockbusters go, they don't get much more unabashedly fatuous as "Moonfall." It's a film that offers synergistic enhancement to alcohol. Its dumb ideas are, if one is honest, strangely fun and appealing. "Moonfall" would make a great double feature with "Geostorm." Which was, incidentally, made by Dean Devlin, Roland Emmerich's longtime writing partner. 
            The premise of "Moonfall" is simple. Earth's moon is falling from its orbit, causing flooding and weird gravitational anomalies all over the world. Patrick Wilson, Halle Berry, and John Bradley find, through a very elaborate investigation process, that the moon is not a heavenly body that formed naturally, but an ancient alien superstructure housing a swarm of tiny malevolent space bots. It turns out that billions of years ago, human-like alien ancestors living on a distant planet had accidentally created a resentful AI program that turned on it. The moon was built on said distant planet as a seeding craft to implant the Earth with human DNA. It is, as they say, a hoot. 
             Much of the action sequences in "Moonfall" center on the shifting of gravity. Not only are several scenes set aboard space shuttles or on the lunar surface, but as the moon passes closer and closer to Earth, its gravity begins lifting people — and buildings — off the ground. In a recent behind-the-scenes report from SciFiNow, the cast talked about what they had to do to ensure authenticity in their zero-gravity movements, and the trials of shooting a film during a pandemic.`,
            category:"Hollywood",
            date: "September 20, 2022"
        },
        {
            id: 31,
            image: "https://breakingmuscle.com/wp-content/uploads/2022/05/Best-Landmine-Exercises.png",
            title: "The Best Landmine Workouts For More Muscle And Better Conditioning",
            description:`Perhaps you’ve seen a lifter pressing, twisting, or rowing a barbell by rotating it on end. Appropriately named, these landmine exercises produce lethally effective workouts. Landmine training is performed in settings from Division 1 college weight rooms to bodybuilding gyms to injury rehab clinics.`,
            body:`Perhaps you’ve seen a lifter pressing, twisting, or rowing a barbell by rotating it on end. Appropriately named, these landmine exercises produce lethally effective workouts. Landmine training is performed in settings from Division 1 college weight rooms to bodybuilding gyms to injury rehab clinics.
            The barbell is used for lever-based resistance — one end pivots on the floor or in a purpose-built sleeve as the lifter moves the loaded end through space. Make no mistake, this is not flashy “training for the ‘Gram” or some gross misuse of equipment.
            The landmine provides opportunities for exercises with characteristics distinct from traditional free-weight training. The best part? Landmines offer versatility to train the entire body along with multiple components of fitness. Here, you’ll find the best landmine workouts for building serious upper and lower-body muscle, along with elite-level conditioning.
            `,
            category:"Fitness",
            date: "September 15, 2022"
        },
        {
            id: 32,
            image: "https://www.muscleandfitness.com/wp-content/uploads/2021/06/Actor-and-creater-of-the-fitness-app-Centr-Power-App-Chris-Hemsworth-working-out-with-a-dumbbell-row-exercise.jpg?quality=86&strip=all",
            title: "Actor Chris Hemsworth Issued A Five-Round, 50-Rep Full-Body Workout Challenge",
            description:`Ever since he entered the public eye as an actor, Chris Hemsworth has usually made it a point to keep up with his strength training and overall fitness. Between his film work, Hemsworth has spent some of his recent time promoting his workout application, Centr — which he started in 2019, according to an interview with Bloomberg.`,
            body:`Ever since he entered the public eye as an actor, Chris Hemsworth has usually made it a point to keep up with his strength training and overall fitness. Between his film work, Hemsworth has spent some of his recent time promoting his workout application, Centr — which he started in 2019, according to an interview with Bloomberg. The latest routine from the man famous for playing Thor in the Marvel Cinematic Universe is a doozy. 
            On August 25, 2022, Hemsworth shared a 50-rep full-body workout featuring a combination of burpees, squats, lunges, biceps curls, and shoulder presses. The actor appeared to perform the respective exercises by a body of water, which may have again been on the deck of a Navy ship from the recent record-breaking blockbuster, Top Gun: Maverick.
            According to the caption of Hemsworth’s post, the workout apparently becomes more manageable as one shifts from exercise to exercise. However, and this seems like an imperative aspect, he stresses not to rest until all 50 total reps are finished. That could indicate the full-body routine emphasizes both strength and conditioning.  `,
            category:"Fitness",
            date: "August 26, 2022"
        },
        {
            id: 33,
            image: "https://breakingmuscle.com/wp-content/uploads/2022/09/Shutterstock_1697808010-768x432.jpg",
            title: "The Best Dumbbell Ab Workouts For A Stronger, Better-Looking Core",
            description:`Ab training is not only about aesthetics and making your abs look better. Yes, these workouts will check both of those boxes, but these specialized training plans can also help you understand that your abdominal muscles are highly functional, not just for show.`,
            body:`Ab training is not only about aesthetics and making your abs look better. Yes, these workouts will check both of those boxes, but these specialized training plans can also help you understand that your abdominal muscles are highly functional, not just for show.
            Once you start training them effectively, you can end up looking better, moving better, and feeling better. These workouts may look simple, but don’t be fooled because simple does not mean easy. Get ready to build a midsection that will help you crush any workout and, if needed, anyone.
            How to Do it: Place one dumbbell on the ground and position yourself at arm’s length to the side. Begin with your hands, knees, and toes on the floor. Set shoulders directly over your wrists and your knees directly under your hips. Keep your arms straight and actively push your hands into the ground while reaching your shoulders down to engage your serratus anterior. With the hand farthest from the weight, reach across your body and then drag the dumbbell across the floor underneath you. Take three to four seconds to move the weight, which should allow you to feel your abdominal muscles working. Continue dragging the weight until your arm is fully extended. Don’t allow your body to tilt or rotate. Switch hands and return the weight to the starting position.`,
            category:"Fitness",
            date: "September 15, 2022"
        },
        {
            id: 34,
            image: "https://www.wellandgood.com/wp-content/uploads/2020/09/GettyImages-667607855-Resistance-bands-for-beginners.jpg",
            title: "9 Resistance Band Exercises for Beginners That’ll Totally Kick Your Butt (and Arms, and Abs)",
            description:`The pros of working out at home include not having to commute or comb your hair to squeeze a sweat session in during the day. Exercising at home can also be more cost-effective: Online memberships go for about the price of a fancy smoothie.`,
            body:`The pros of working out at home include not having to commute or comb your hair to squeeze a sweat session in during the day. Exercising at home can also be more cost-effective: Online memberships go for about the price of a fancy smoothie. (Or totally free if you head to YouTube.) The only con is that, chances are, your home lacks all the fancy (or at least large) equipment you can find at the gym. Resistance bands, however, solve that problem—especially if you're a beginner fitness enthusiast.
            Benefits of resistance band exercises
            1. Easy on the joints
            "Resistance band exercises are very much like traditional weight-bearing exercises, except that they have an anchor point and therefore engage more of the body with each exercise," says Floery Mahoney, founder of Board30, a fitness studio franchise that provides a full-body resistance band workout. "The smooth and constant tension is much better for your joints and even helps strengthen your joints, the more you use them."
            2. Increases strength evenly
            If you want to ensure a symmetrical workout, resistance bands have your back (and core, and arms—you get the gist). "Resistance band exercises increase strength evenly, both concentrically and eccentrically [meaning, when you contract and release], so your muscles are strong but more pliable and less injury-prone," Mahoney says.
            3. Builds muscle
            Resistance bands may look flimsy, but don't be fooled: They can help you build some serious muscle. "You can build muscle mass using resistance bands by increasing the tension and doing fewer reps," Mahoney says. "You can also incorporate cardio more easily than with weights," which are bulkier and more unwieldy.`,
            category:"Fitness",
            date: "September 18, 2022"
        },
        {
            id: 35,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/09/TOTMC-16-Minute-Afro-Dance-Combo-620x359.jpg",
            title: "Why Lunge When You Can Vibe? This Afro Dance Combo Will Give You a Physical and Emotional Boost",
            description:`The final eight counts of this Afro dance combo "is all about vibes,” says instructor Kiné Camara. "It's all about having fun, it's all about that celebration moment." It’s also a pulsating lunge with core, back, and arm activation. But, really, who gives a hoot about that when the vibes are so strong?`,
            body:`The final eight counts of this Afro dance combo "is all about vibes,” says instructor Kiné Camara. "It's all about having fun, it's all about that celebration moment." It’s also a pulsating lunge with core, back, and arm activation. But, really, who gives a hoot about that when the vibes are so strong?
            Camara is Well+Good’s Trainer of the Month for September, and is delivering a weekly master class in Afro dance. In week one, she taught us some of the common dance moves from around the African continent, so you may want to check out that video if you’re new to this art form.
            This week, Camara leads us in a combo that uses the whole body. You’ll be squatting and lunging but you won’t even realize it because these common strength moves are simply part of a flowing dance routine packed with energy and attitude. "Even when you're doing something kind of simple, or that feels maybe even more fitness-like, when you're dancing you have to bring some energy and feeling into it," says Camara.
            A combo might sound intimidating, but Camara breaks down each eight-count in multiple ways so that the phrases become like building blocks you’ll be able to put together. Her words of wisdom? Don’t be intimidated to try something new.`,
            category:"Fitness",
            date: "September 19, 2022"
        },
        {
            id: 36,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/09/IMG_2022-9-10-181520-600x400.jpg",
            title: "The Science-Backed Method To Properly Warm Up Before Lifting Weights",
            description:`It’s lifting day and you’re absolutely ready to go. Energy levels are on point, body is feeling great, mindset is in the growth state and looking to take on all challenges. You get to the gym, fill up your water and get to your workout area.`,
            body:`It’s lifting day and you’re absolutely ready to go. Energy levels are on point, body is feeling great, mindset is in the growth state and looking to take on all challenges. You get to the gym, fill up your water and get to your workout area. You know a weight lifting warm-up is key for performance and reducing injury risk so you’ve already allotted some time to build up to your actual working sets. BUT, what’s the best way to warm up safely and effectively for strength training?
            When it comes to working on your cardio or for movement based activities like running or sports, the game plan is easier. The warm-up could consist of dynamic stretches, mobilizations, muscle activations, and then simply doing whatever cardio or sport you’re doing at a lower intensity for a given amount of time. However, for strength training, there's more variables and thus, question.
            A few common ones that come to mind: How should I be warming up for my lifts? Should I do some band work? If so, what level of resistance and at what intensity? If it’s weights, should I warm up by doing the specific lifts that I’ll be doing? Should I do them all at once or immediately prior to each specific lift? How much weight and for how many repetitions should I be lifting before my first working set?`,
            category:"Fitness",
            date: "September 17, 2022"
        },
        {
            id: 37,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/09/IMG_2022-9-10-154821-599x400.jpg",
            title: "I’m an Ultrarunner, and Here Are 4 Tips To Help You Break Marathon Distance",
            description:`Do you run for the entire race?" This is the most commonly asked question I get when people discover I’m an ultrarunner. It’s true that I participate in races that see me on my feet for 12-plus hours at a time, sometimes for consecutive days, but do I run non-stop? The honest answer is no.`,
            body:`Do you run for the entire race?" This is the most commonly asked question I get when people discover I’m an ultrarunner. It’s true that I participate in races that see me on my feet for 12-plus hours at a time, sometimes for consecutive days, but do I run non-stop? The honest answer is no.
            Even elite athletes walk in ultras. Legendary runner Dean Karnazes, who has finished the gruelling 100 mile Western States ultra multiple times, is an advocate of walking the hills. And the formidable Jasmin Paris who holds the overall course record at the 268 mile UK Spine Race, power walked many sections.
            Ultras are a very different beast to marathons. Personal bests, pace per minute, and positive splits have no place on the ultra trail. For most runners the aim of an ultra is often simply to finish—the journey, rather than the time, is the goal.
            By definition, an ultra is any distance over 26.2 miles. In reality this can range from 27 miles to 3,100 miles, on single or multiday events. The field of ultrarunning is booming right now. Participation in the sport has grown 1,676% in the past two decades, with more than 600,000 people running ultras each year, according to a report by Run Repeat. And more women are running ultras too, with 23% of participants being female compared to just 14% in 1997.`,
            category:"Fitness",
            date: "September 18, 2022"
        },
        {
            id: 38,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/09/GettyImages-power-walking-for-longevity-kali9-620x360.jpg",
            title: "Power Walking Just 10 Minutes Daily Can Add Years to Your Life—Plus the Step Counts Linked to the Greatest Longevity",
            description:`Now that the 10,000 steps a day myth has officially been busted as the benchmark for boosting your fitness (TL;DR: there's not a lot of solid science behind that figure—and honestly, it depends on what being “fit” means to you), many of us are left wondering: How many steps a day do we really need take to be healthy?`,
            body:`Now that the 10,000 steps a day myth has officially been busted as the benchmark for boosting your fitness (TL;DR: there's not a lot of solid science behind that figure—and honestly, it depends on what being “fit” means to you), many of us are left wondering: How many steps a day do we really need take to be healthy? Well, when it comes to living longer, we have a better idea, thanks to a recent study published in the journal JAMA Internal Medicine, which looked at how power walking for longevity can be beneficial.
            The massive study followed 47,000 participants over the course of seven years and sought to explore how power walking influenced mortality rates using accelerometers, devices that measure changes in velocity, to track physical activity. Of the folks studied, 53 percent were women, and among other findings, the study revealed one major insight into how much you need to power walk to reap the longevity benefits.
            Drum roll, please: The research indicated that if everyone were to start power walking for an extra 10 minutes a day, we could prevent more than 111,000 deaths every year. Meaning, in theory, if you’re not walking at all right now, just 10 minutes is enough to start extending your lifespan. And if you’re already spending time strolling, you’d need to add an extra 10 minutes at a faster clip to reap the rewards.`,
            category:"Fitness",
            date: "September 20, 2022"
        },
        {
            id: 39,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/08/Guille-Faingold-601x400.jpg",
            title: "‘I’m a Longevity Doctor, and I Always Recommend This Game for a Longer, Healthier Life’",
            description:`Volleying a ping-pong ball back and forth may not seem like much of a sport. After all, it usually doesn’t require any real athletic prowess, excepting the occasional lunge after a rogue hit.`,
            body:`Volleying a ping-pong ball back and forth may not seem like much of a sport. After all, it usually doesn’t require any real athletic prowess, excepting the occasional lunge after a rogue hit. But when you delve into the mechanics of the activity, there’s far more than meets the eye (or hand). As you step from side to side, strategize your next shot, and reach to hit the ball, a whole bunch of systems fire in the brain and body, making regular table tennis sessions a secret boon for longevity.
            If anyone should know that link first-hand, it’s family-practice physician Danine Fruge, MD, medical director at Pritikin Longevity Center (where she often points visitors to on-site table tennis) and a former NCAA Division I tennis player. “I had my first experience with tennis and longevity when I taught people at a country club who were in their 90’s,” she says. “And I noticed two things: There was something about practicing a racket sport that seemed to keep these people young, and they were always having fun while they played.”
            Research backs her up: Racket sports (like tennis, badminton, and squash) have been proven to be one of the top categories of sport for increasing lifespan. But not everyone has access to a court—or the knees or energy to run back and forth on one, Dr. Fruge caveats. That sparked her interest in table tennis, which involves many of the same motions and thought processes as tennis (and then some, given it can be even faster-paced), but requires no training or particular level of fitness to start playing. And you can even play it on practically any table with a retractable ping-pong net.`,
            category:"Fitness",
            date: "September 10, 2022"
        },
        {
            id: 40,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/09/IMG_2022-9-6-100441-600x400.jpg",
            title: "Taking ‘Backward Walks’ Can Improve Your Balance, Coordination, and Stability in Ways Normal Walking Can’t",
            description:`If you spend much time scrolling through TikTok, there’s a chance you’ve happened upon the recent trend of people walking backwards. Aside from looking rather bizarre, is there a reason for this switch up? Is good old-fashioned forward motion not enough anymore?`,
            body:`If you spend much time scrolling through TikTok, there’s a chance you’ve happened upon the recent trend of people walking backwards. Aside from looking rather bizarre, is there a reason for this switch up? Is good old-fashioned forward motion not enough anymore?
            Steve Burden, a certified trainer, says the main benefit of walking backwards is that it’s more cardiovascularly and metabolically challenging for the body than walking normally. “This makes it an effective way to develop your cardiovascular system, without the kind of impact and strain associated with traditional activities that require you to move at a faster pace,” he explains. “It also offers a way to fit cardio into shorter sessions, as making your heart work harder means you won’t have to perform the activity for as long to achieve the same results.”
            Burden adds that another benefit of walking backwards is that you have to focus harder and pay much more attention to what you are doing, since you can’t see where you are going. “This will help to improve your coordination and give you better control over your body,” he says. That coordination work can pay off. Studies show walking backwards can boost your balance as well. And, compared to forward walking, walking backwards places different stresses and demands on the muscles and joints in the lower body, helping build strength and reducing overuse injuries.`,
            category:"Fitness",
            date: "September 12, 2022"
        },
        {
            id: 41,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/09/hash-brown.png",
            title: "This 2-Ingredient Heart-Healthy Avocado Hash Brown Recipe Is Basically Avocado Toast 2.0",
            description:`It seems like when it comes to viral TikTok recipes, the wisdom of the crowd always proves victorious. After all, the masses weren’t wrong when it came to obsessing over delicious internet-famous dishes like cowboy caviar and baked feta pasta. They’re still a 10 out of 10 for us.`,
            body:`It seems like when it comes to viral TikTok recipes, the wisdom of the crowd always proves victorious. After all, the masses weren’t wrong when it came to obsessing over delicious internet-famous dishes like cowboy caviar and baked feta pasta. They’re still a 10 out of 10 for us.
            The latest iteration of must-try meals brought to you by none other than TikTok is best served at breakfast. This two-ingredient, heart-healthy avocado hash brown recipe is just as good—if not better—than avocado toast. (We said what we said.) How can this even be possible? It’s all in the bread... or in this case, the super crispy, crunchy hash brown that’ll make any potato aficionado instantly swoon.
            Why this avocado hash brown recipe is so much better than regular avo toast
            If you’re ready to take it back to the '90s when your parents still had to drive you everywhere and breakfast meant an obligatory pitstop at the local Mickey D’s, this recipe is for you. One of our favorite parts about a kid’s breakfast Happy Meal (aside from the fun toy, obvi) was the golden hash brown that comes individually wrapped in a white paper sleeve to sop up the excess oil. While we can never be too old to feed our inner child a sweet and savory McGriddle breakfast sandwich, replicating this drive-thru-worthy meal at home has never been easier thanks to our beloved supermarket, Trader Joe’s.`,
            category:"Food",
            date: "September 15, 2022"
        },
        {
            id: 42,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/06/Stocksy_txpe66b3693GhS300_Small_4194726.jpg",
            title: "This Is the Secret to Training Your Taste Buds To Relish Foods That Are Lower in Salt and Sodium",
            description:`Whenever I get my hands on a bag of pretzels, it always feels like I can’t put it down until the whole thing is gone. After consuming far too much sodium in one sitting, my mouth starts to feel like the desert in a heat wave, I get a sudden urge to chug all five of the Great Lakes, and I immediately wish I hadn’t eaten all of it at once.`,
            body:`Whenever I get my hands on a bag of pretzels, it always feels like I can’t put it down until the whole thing is gone. After consuming far too much sodium in one sitting, my mouth starts to feel like the desert in a heat wave, I get a sudden urge to chug all five of the Great Lakes, and I immediately wish I hadn’t eaten all of it at once. Though it was so good... #noregrets. However, that’s to say, like most things in life, even the best of salty snacks are about moderation.
            Of course, we know that sodium is important for biological functioning, and you can, in fact, fall into a sodium deficiency if you don’t have enough of it. Plus, it’s one of a chef’s favorite not-so-secret ingredients for creating super flavorful dishes. However, according to the CDC, consuming too much of it can potentially lead to high blood pressure, increasing the risk of heart disease and stroke.
            So, does that mean we’re fated to only eating bland, flavorless food forever if we want to keep our health in tip-top shape? Definitely not. In fact, a recent study by the European Society of Cardiology that analyzed the effects of taste adaptation intervention (aka the results of eating less sodium) showed that your taste buds can actually acclimate—and even learn to very much enjoy—a diet lower in salt. To understand how to train your taste buds to enjoy foods lower in salt, we spoke with a registered dietitian and the study's lead researcher to learn how.`,
            category:"Food",
            date: "September 19, 2022"
        },
        {
            id: 43,
            image: "https://minimalistbaker.com/wp-content/uploads/2018/12/5-Minute-Queso-SQUARE.jpg",
            title: "This 5-Minute Vegan Cashew Queso Dip Is Perfect for Poolside Snacking (and It’s Packed With Bone Health Benefits)",
            description:`Let’s play a game of word association. What’s the first thing that comes to mind when you hear the words "tortilla chips"? Guac? Although we do love a good bowl of creamy guacamole, we’re actually talking about the golden, gooey, and delicious dip that pairs just as well—if not better—with cantina-style crunchy tortilla chips. Yes, we’re talking about queso.`,
            body:`Let’s play a game of word association. What’s the first thing that comes to mind when you hear the words "tortilla chips"? Guac? Although we do love a good bowl of creamy guacamole, we’re actually talking about the golden, gooey, and delicious dip that pairs just as well—if not better—with cantina-style crunchy tortilla chips. Yes, we’re talking about queso.
            Trust: This delicious dip never fails to make the friend group at the poolside get-together scoop until there’s no more in sight. So, to guarantee no chip goes queso-less this Labor Day, we found the best “cheesy” recipe of your dreams. Seven staple pantry ingredients, five minutes, and one blender are all you need to whip up this five-minute *vegan* cashew queso dip recipe by Minimalist Baker. Challenge accepted.
            What makes this vegan cashew queso dip recipe so good?
            Aside from the (creamy and dreamy) obvious, this easy queso recipe is gluten-free, vegan, and free from artificial ingredients. Plus, it’s packed with three grams of protein per serving, thanks to cashews, which are one of the best types of nuts for skin and bone health. Cashews contain a high amount of copper (aka 622 micrograms per ounce of the nut), which is about 70 perfect of the daily recommended amount for adults, Nora Minno, RDN, a dietitian and certified personal trainer in New York City, previously told Well+Good. Copper, Minno explains, helps stave off osteoporosis and maintain collagen and elastin, which are both important for skin health and bone density.`,
            category:"Food",
            date: "September 20, 2022"
        },
        {
            id: 44,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/08/Stocksy_txpe16d4bb4vBV300_Small_2043052.jpg",
            title: "Here’s Why One-Pan Spicy Lemon Pasta Should Be Your New Anti-Inflammatory Main Squeeze",
            description:`At this point, it seems like every day, another viral TikTok recipe emerges. If you have a hard time getting around to actually making the recipes you save on the social media app before the trend has long come and gone, you’re not alone.`,
            body:`At this point, it seems like every day, another viral TikTok recipe emerges. If you have a hard time getting around to actually making the recipes you save on the social media app before the trend has long come and gone, you’re not alone. However, every now and then, a new recipe emerges that’s almost too easy to resist because, truth is, you already have all of the ingredients on hand—so why not give it a shot?
            Take cowboy caviar, for example. It’s a mix of beans and a boatload of veggies that taste great no matter what combination you decide. Plus, it’s filled with anti-inflammatory, protein-rich, and gut-friendly ingredients, making it a no-brainer to snack on all summer. But as the weather starts to get a little cooler and signs of fall start to make its presence known as the leaves begin to brown, it might be time for a soul-comforting dish like a big ol’ bowl of pasta. Am I right?
            So, in the latest iteration of TikTok-famous recipes, we’ve seen lemon pasta climbing up the ranks of the recipes-from-social-media-you-actually-want-to-make leaderboard. This simple spicy lemon pasta recipe is made with some of the best anti-inflammatory and longevity-boosting ingredients we just can’t live without, like lemon, olive oil, chili pepper flakes, and garlic. The catch? Well, there really isn’t any, except this easy breezy lemon squeezy recipe is made in one pan, and cleanup is virtually nonexistent. 10 points to TikTok!`,
            category:"Food",
            date: "September 14, 2022"
        },
        {
            id: 45,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/07/Stocksy_txpeb356070YTT300_Small_2103720.jpg",
            title: "Mexican Tajín Seasoning Packs Major Anti-Inflammatory Benefits ",
            description:`Everything tastes 100 times better with just a little sprinkle of Tajín. This Mexican seasoning—made from a perfectly-balanced blend of dried red chilis, salt, and dehydrated lime juice—adds the perfect amount of saltiness, zestiness, and spiciness to anything from fresh fruit and corn to tacos, ice pops, tortilla chips, and margaritas.`,
            body:`Everything tastes 100 times better with just a little sprinkle of Tajín. This Mexican seasoning—made from a perfectly-balanced blend of dried red chilis, salt, and dehydrated lime juice—adds the perfect amount of saltiness, zestiness, and spiciness to anything from fresh fruit and corn to tacos, ice pops, tortilla chips, and margaritas.
            By the way, in addition to its ability to instantly transform a bland dish into something that’ll tantalize every single one of your taste buds, Tajín also packs major anti-inflammatory benefits. If you're ready to learn more about the rich history of Tajín, its many health benefits, and how to use it in every dish you serve, read on.
            What is Tajín, and where did it come from?
            The story goes that Tajín was born on December 23, 1985 in Guadalajara, a western city in Mexico. The product had a humble start, with the owners selling the bottles one by one to local stores before expanding their business. After finding great success in the Mexican market, Tajín made its way to the United States in the early '90s. At the start of the 2000s, the product underwent some minor makeover adjustments and began exploring its worldwide potential in continents like Europe, Asia, and Africa. Today, the product can be found in more than 30 countries globally, and proudly represents some of the bold and delicious flavors of Mexican cuisine.`,
            category:"Food",
            date: "September 16, 2022"
        },
        {
            id: 46,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/07/Stocksy_txp6758b2e1rTT300_Small_2353957.jpg",
            title: "This Magnesium-Rich Creamy Avocado Pesto Sauce Takes Approximately 30 Seconds To Make ",
            description:`Raise your hand if you think that avocados deserve their own food group. *Raises both hands.* Few things are more satisfying than splitting open a perfectly ripe ‘cado ideal for making a presentation-worthy toast, spicy guac, or garnishing a salad.`,
            body:`Raise your hand if you think that avocados deserve their own food group. *Raises both hands.* Few things are more satisfying than splitting open a perfectly ripe ‘cado ideal for making a presentation-worthy toast, spicy guac, or garnishing a salad.
            But, every now and then, we might come across a slightly bruised one that might not be as easy on the eyes. Before you grimace at the thought of having to throw away your money—I mean avocado—we’ve got a genius way to spare yourself from wasting the expensive fruit just because it’s giving you the ick.
            Fortunately, we’ve learned that eating a brown avocado is usually fair game, according to a food scientist who shared all the facts. So, what should you be doing with a slightly bruised batch (that’s perfectly safe to eat) that might be better disguised in something else? Aside from throwing it into a green smoothie or turning it into avocado bread, you can also use it to make a creamy avocado pasta sauce loaded with tons of RD-approved health benefits that’ll fulfill your every pasta dream. I mean, for crying out loud, it’s pasta *and* avocados all in one dish. Need I say more?`,
            category:"Food",
            date: "September 17, 2022"
        },
        {
            id: 47,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/08/Stocksy_txp5766c835PNU300_Small_1707715.jpg",
            title: "These 1-Ingredient (!) Frozen Fruit Popsicles Are the Ultimate Hydration-Boosting, Inflammation-Fighting Summer Snack",
            description:`As soon as the dog days of summer roll around, we make it a personal mission to avoid our ovens like the plague—and enjoy as much fresh produce as possible—in an effort to stay well-fed and hydrated, honor the season's bounty, and (most importantly) avoid sweating through our clothes several times daily. `,
            body:`As soon as the dog days of summer roll around, we make it a personal mission to avoid our ovens like the plague—and enjoy as much fresh produce as possible—in an effort to stay well-fed and hydrated, honor the season's bounty, and (most importantly) avoid sweating through our clothes several times daily. Cut to our unending hunt for the most deliciously refreshing no-cook meal and snack ideas that incorporate our fresh-from-the-farmers-market haul and won’t keep us away from the pool or beach for too long.
            Good news: We may have found the one. Lately, we can’t get enough of this super-simple summer treat from @livehealthywithlexi: a one-ingredient frozen fruit popsicle recipe made with whatever seasonal produce you have laying around in your crisper drawer. Does it get any easier (or more summery) than that?`,
            category:"Food",
            date: "September 05, 2022"
        },
        {
            id: 48,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/08/Stocksy_txp6b24cd8etaU300_Small_537286-850x570.jpg",
            title: "We’re Calling It: This Is the Easiest Vegan Strawberry Shortcake Recipe… Ever (and It’s Loaded with Fiber and Antioxidants)",
            description:`Let’s play a game of Guess Who? She has freckles across her nose, beautiful red hair, and smells sweet like berries. If you guessed Strawberry Shortcake, you win this round! Before you start jamming to the theme song and start singing, “straw-ba-ba-ba-ba-berry shortcake,” we’ve got a simple recipe that’ll bring you back to 1979—aka when this iconic doll made her first debut. `,
            body:`Let’s play a game of Guess Who? She has freckles across her nose, beautiful red hair, and smells sweet like berries. If you guessed Strawberry Shortcake, you win this round! Before you start jamming to the theme song and start singing, “straw-ba-ba-ba-ba-berry shortcake,” we’ve got a simple recipe that’ll bring you back to 1979—aka when this iconic doll made her first debut.
            If you’re one that loves to eat with the seasons and think that shopping at the Farmers’ Market is basically the ideal first date, you’ve likely taken full advantage of the strawberry season this year, which lasts between March and August. Not ready to say goodbye to delicious, juicy fresh strawberries until next spring? Consider this strawberry dessert recipe your last hurrah.
            On the latest episode of Alt-Baking Bootcamp, nutrition coach and baker Sashah Handal shares her super easy vegan strawberry shortcake recipe. “Most cakes can be really fussy and kind of tedious—this cake is not that,” Handal says. TBH, we’re always down to take on a no-fuss, drama-free recipe that tastes great any day of the week. Read on for the full recipe, and follow along in the video above to see how it's done.`,
            category:"Food",
            date: "September 10, 2022"
        },
        {
            id: 49,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/08/irish-moss-2.png",
            title: "Are Those Buzzy Sea Moss Smoothies a Gift from the Gods of Gut Health or Way Overhyped?",
            description:`Just a few years ago, the thought of adding a heaping pile of kale, spinach, or even tomatoes to a smoothie recipe might have instantly triggered your internal ick factor. In the early 2000s, my go-to smoothies were exclusively limited to banana and strawberry combinations like my ride-or-die Jamba Juice order: The 16-ounce Razzmatazz with extra strawberries, please. `,
            body:`Just a few years ago, the thought of adding a heaping pile of kale, spinach, or even tomatoes to a smoothie recipe might have instantly triggered your internal ick factor. In the early 2000s, my go-to smoothies were exclusively limited to banana and strawberry combinations like my ride-or-die Jamba Juice order: The 16-ounce Razzmatazz with extra strawberries, please.
            However, as I entered adulthood and my palate became much more *refined* (TYSM, Ina Garten), the thought of slurping on a green smoothie became something I enjoyed and, dare I say, even craved. These days, experimenting with loads of healthy, novel ingredients in a smoothie has become as popular as Hailey Bieber (and her 17-dollar smoothie at Erewhon).
            TBH, sometimes it feels like I'm conducting an elaborate science experiment when I toss in a dash of maca, a pinch of cayenne, and a splash of coconut kefir into the blender. And with smoothie and juice bars stepping up to the challenge, you can find boatloads of highly nutritious add-ons like collagen powder or blue spirulina on most menus. However, one that has recently caught our attention is sea moss. If you're curious whether or not there are any real-deal health benefits to sea moss and why everyone seems to be adding it to their smoothies right now, you've come to the right place.`,
            category:"Food",
            date: "September 12, 2022"
        },
        {
            id: 50,
            image: "https://www.wellandgood.com/wp-content/uploads/2022/08/Stocksy_txpb280c0a6dlU300_Small_4588837.jpg",
            title: "Yes, You Can Use Your Blender as a Coffee Grinder (Baristas Agree)",
            description:`If your favorite mug reads in big, bold letters, “Don’t talk to me until I’ve had my coffee,” you’re speaking to our collective soul. Just like your go-to daily skincare routine and non-negotiable hot girl walk, the morning isn’t complete until you’ve peeled your eyes open and instantly taken care of the first order of business for the day: Glugging an entire cup of cold brew. `,
            body:`If your favorite mug reads in big, bold letters, “Don’t talk to me until I’ve had my coffee,” you’re speaking to our collective soul. Just like your go-to daily skincare routine and non-negotiable hot girl walk, the morning isn’t complete until you’ve peeled your eyes open and instantly taken care of the first order of business for the day: Glugging an entire cup of cold brew. Aaaaah.
            TBH, whether or not you’ve had your coffee can be the deciding factor between existing as Oscar the Grouch or Elmo for the day. And although there’s nothing wrong with a drive-thru cup of joe, Jiyoon Han, co-owner and founder of Bean & Bean, a New York-based, AAPI family-owned coffee company, says that using freshly ground, high-quality beans is key to achieving coffee nirvana.
            Before you open the Amazon app to order a pricy burr coffee grinder and add yet another appliance to your heaping collection of kitchen gadgets, Han says that you can easily transform your blender into a coffee grinder in seconds. Although this genius trick yields solid results, Han explains that there are a few key steps and considerations to grinding coffee beans in a blender that can give you the best-quality cup. Here’s everything you need to know.`,
            category:"Food",
            date: "September 12, 2022"
        },
        
     
    ])

  return (
    <div>
        <store.Provider value = {[data]}>
            {
                props.children
            }
        </store.Provider>
    </div>
  )
}


export default Data;