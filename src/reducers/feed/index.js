// Core
import { Map, List } from 'immutable';

// Instruments
import types from 'actions/feed/types';

const initialState = Map({
    results: Map()
});

const defaultState = {
    results:
    [
         { 'vote_count': 2087, 'id' : 284053, 'video': false, 'vote_average' : 7.5, 'title' : 'Thor: Ragnarok','popularity':697.327517,'poster_path':"\/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",'original_language':'en','original_title':'Thor: Ragnarok','genre_ids':[28,12,35,14,878],'backdrop_path':'\/5wNUJs23rT5rTBacNyf5h83AynM.jpg','adult':false,'overview':'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.','release_date':'2017-10-25'},
         { 'vote_count':1205, 'id' : 141052, 'video' : false, 'vote_average' : 6.8, 'title' : 'Justice League','popularity':615.66305,'poster_path':"\/9rtrRGeRnL0JKtu9IMBWsmlmmZz.jpg",'original_language':'en','original_title':'Justice League','genre_ids':[28,12,14,878],'backdrop_path':'\/o5T8rZxoWSBMYwjsUFUqTt6uMQB.jpg','adult':false,'overview':`Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry, and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.`,'release_date':'2017-11-15'},
         { 'vote_count': 541, 'id' : 440021, 'video' : false, 'vote_average' : 6.4, 'title' : 'Happy Death Day','popularity':506.307234,'poster_path':"\/cTaEIUYTt52ooq9quVbAQ7NpGwo.jpg",'original_language':'en','original_title':'Happy Death Day','genre_ids':[27],'backdrop_path':'\/eGx5OfOdvM0gkHdmkLe3hcJuEIT.jpg','adult':false,'overview':`A college student relives the day of her murder over and over again as she tries to discover her killer's identity.`,'release_date':'2017-10-12'},
         { 'vote_count': 336, 'id' : 298250, 'video' : false,'vote_average' : 5.9,'title' : 'Jigsaw','popularity':472.823811,'poster_path':"\/zUbUtxiTdEgWnkXY945gtYYqBZ1.jpg",'original_language':'en','original_title':'Jigsaw','genre_ids':[27,53],'backdrop_path':'\/ytKpFaLMpFWnuSXStz1GHrtTt6R.jpg','adult':false,'overview':'Dead bodies begin to turn up all over the city, each meeting their demise in a variety of grisly ways. All investigations begin to point the finger at deceased killer John Kramer.','release_date':'2017-10-20'},
         { 'vote_count': 176, 'id' : 419680, 'video' : false,'vote_average' : 5.6,'title' : `Daddy's Home 2`,'popularity':355.495816,'poster_path':"\/rF2IoKL0IFmumEXQFUuB8LajTYP.jpg",'original_language':'en','original_title':`Daddy's Home 2`,'genre_ids':[18,35],'backdrop_path':'\/lMDyuHzBhx3zNAv48vYzmgcJCCD.jpg','adult':false,'overview':'Brad and Dusty must deal with their intrusive fathers during the holidays.','release_date':'2017-11-09'},
         { 'vote_count': 287, 'id' : 392044, 'video' : false,'vote_average' : 6.5,'title' : 'Murder on the Orient Express','popularity':307.574577,'poster_path':"\/iBlfxlw8qwtUS0R8YjIU7JtM6LM.jpg",'original_language':'en','original_title':'Murder on the Orient Express','genre_ids':[80,18,9648],'backdrop_path':'\/tvKcA4OFUiZkNeTJmmTkNqKHMMg.jpg','adult':false,'overview':'Genius Belgian detective Hercule Poirot investigates the murder of an American tycoon aboard the Orient Express train.','release_date':'2017-11-03'},
         { 'vote_count': 413, 'id' : 274855, 'video' : false,'vote_average' : 5.7,'title' : 'Geostorm','popularity':280.507731,'poster_path':"\/nrsx0jEaBgXq4PWo7SooSnYJTv.jpg",'original_language':'en','original_title':'Geostorm','genre_ids':[28,878,53],'backdrop_path':'\/lhTtnsPmEYUJB7nOaTKJzYoxJ7X.jpg','adult':false,'overview':'Gerard Butler playing a stubborn but charming satellite designer who, when the world’s climate-controlling satellites malfunction, has to work together with his estranged brother to save the world from a man-made storm of epic proportions. A trip into space follows, while on Earth a plot to assassinate the president begins to unfold.','release_date':'2017-10-13'},
         { 'vote_count': 234, 'id' : 372343, 'video' : false,'vote_average' : 4.9,'title' : 'The Snowman','popularity':236.481517,'poster_path':"\/bQHgpTVsAWjNQWS0frsl7DlzLX1.jpg",'original_language':'en','original_title':'The Snowman','genre_ids':[80,18,27,9648,53],'backdrop_path':'\/tAg6KUBANIVbYUpTHy5oKibhhw3.jpg','adult':false,'overview':'Detective Harry Hole investigates the disappearance of a woman whose pink scarf is found wrapped around an ominous looking snowman.','release_date':'2017-10-12'},
         { 'vote_count': 81, 'id' : 399057, 'video' : false, 'vote_average' : 6, 'title' : 'The Killing of a Sacred Deer','popularity':235.332572,'poster_path':"\/e4DGlsc9g0h5AyoyvvAuIRnofN7.jpg",'original_language':'en','original_title':'The Killing of a Sacred Deer','genre_ids':[18,27,9648,53],'backdrop_path':'\/854uDv6rzbwF82jOtFe931SMrRs.jpg','adult':false,'overview':`A teenager's attempts to bring a brilliant surgeon into his dysfunctional family take an unexpected turn.`,'release_date':'2017-10-20'},
         { 'vote_count': 1353, 'id' :341013, 'video' : false, 'vote_average' : 6.1, 'title' : 'Atomic Blonde','popularity':211.518863,'poster_path':"\/kV9R5h0Yct1kR8Hf8sJ1nX0Vz4x.jpg",'original_language':'en','original_title':'Atomic Blonde','genre_ids':[53,9648,28],'backdrop_path':'\/lj3wkYkJGkfmDfXkKrVarSJpFD4.jpg','adult':false,'overview':'An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.','release_date':'2017-07-26'},
         { 'vote_count' : 224, 'id': 390062, 'video' : false, 'vote_average' : 5.1, 'title' : 'Jungle','popularity':193.482643,'poster_path':'\/tDgxknTVwrScxpCYyGUjXSn5NRk.jpg','original_language':'en','original_title':'Jungle','genre_ids':[12,18,53],'backdrop_path':'\/go1a6YwrVTMrNNIfaRpBRp5pIzV.jpg','adult':false,'overview':'A mysterious guide escorts an enthusiastic adventurer and his friend into the Amazon jungle, but their journey turns into a terrifying ordeal as the darkest elements of human nature and the deadliest threats of the wild force them to fight for survival.','release_date':'2017-10-20'},
         { 'vote_count' : 51, 'id' : 395458, 'video' : false, 'vote_average' : 4.1, 'title' : 'Suburbicon','popularity':170.342896,'poster_path':'\/a3IHgSwO5jWPLcGjKqbQ7pxVGkq.jpg','original_language':'en','original_title':'Suburbicon','genre_ids':[18,28,80,9648],'backdrop_path':'\/egHeYqgrutiRAzGGWTKp3zqUw0j.jpg','adult':false,'overview':'A crime mystery set in the quiet family town of Suburbicon during the 1950s, where the best and worst of humanity is hilariously reflected through the deeds of seemingly ordinary people. When a home invasion turns deadly, a picture-perfect family turns to blackmail, revenge, and murder.','release_date':'2017-10-26'},
         { 'vote_count' : 28, 'id' : 413362, 'video' : false, 'vote_average' : 4.7, 'title' : 'Roman J. Israel, Esq.','popularity':163.957561,'poster_path':'\/8e5IGlLrVjwrlDcRtzSQkXhJFWl.jpg','original_language':'en','original_title':'Roman J. Israel, Esq.','genre_ids':[18],'backdrop_path':'\/sY2ttr9jdPFlTVm5gxFkRW2ELUi.jpg','adult':false,'overview':'Hard-nosed liberal lawyer Roman J. Israel has been fighting the good fight forever while others take the credit. When his partner, the firm’s frontman, has a heart attack, Israel suddenly takes on that role. He soon discovers some unsettling truths about the firm--truths that conflict with his values of helping the poor and dispossessed--and finds himself in an existential crisis that leads to extreme actions.','release_date':'2017-11-10'},
         { 'vote_count' : 29, 'id' : 355547, 'video' : false, 'vote_average' : 4, 'title' : 'The Star','popularity':157.226544,'poster_path':'\/tEbDvivUfsCupngKIfMJJ725eAD.jpg','original_language':'en','original_title':'The Star','genre_ids':[35,16,12],'backdrop_path':'\/iJ5dkwIHQnq8dfmwSLh7dpETNhi.jpg','adult':false,'overview':'A small but brave donkey and his animal friends become the unsung heroes of the greatest story ever told, the first Christmas.','release_date':'2017-11-15'},
         { 'vote_count' : 4, 'id' : 450322, 'video': false, 'vote_average' : 5.8, 'title' :'The Man Who Invented Christmas','popularity':146.518437,'poster_path':'\/qRkzRue5rTzB6PESXBJCKqROOXC.jpg','original_language':'en','original_title':'The Man Who Invented Christmas','genre_ids':[18,36],'backdrop_path':'\/2lpHdk1ccelg5odsCmk77WqmIvT.jpg','adult':false,'overview':'After a series his books have been flops, Charles Dickens decides to write and self-publish A Christmas Carol.','release_date':'2017-11-22'},
         { 'vote_count' : 11, 'id' : 399404, 'video' : false, 'vote_average' : 3.3, 'title' :'Darkest Hour','popularity':139.210691,'poster_path':'\/67fPL6ZaiOeM4hYqpxqV9Py8psJ.jpg','original_language':'en','original_title':'Darkest Hour','genre_ids':[18,36,10752],'backdrop_path':'\/mBd56RoS8HiiLT1u0ZZAWFWSU3g.jpg','adult':false,'overview':'A thrilling and inspiring true story begins on the eve of World War II as, within days of becoming Prime Minister of Great Britain, Winston Churchill must face one of his most turbulent and defining trials: exploring a negotiated peace treaty with Nazi Germany, or standing firm to fight for the ideals, liberty and freedom of a nation. As the unstoppable Nazi forces roll across Western Europe and the threat of invasion is imminent, and with an unprepared public, a skeptical King, and his own party plotting against him, Churchill must withstand his darkest hour, rally a nation, and attempt to change the course of world history.','release_date':'2017-11-22'},
         { 'vote_count' : 24, 'id' : 345923, 'video' : false, 'vote_average' : 3.1, 'title' : 'All I See Is You','popularity':133.14857,'poster_path':'\/wc9MgFWuBl3VS72w6VtiZXTgN79.jpg','original_language':'en','original_title':'All I See Is You','genre_ids':[18,53],'backdrop_path':'\/mJHSPIvKoa1gwrdAMXWWq5utx3b.jpg','adult':false,'overview':`A blind woman's relationship with her husband changes when she regains her sight and discovers disturbing details about themselves.`,'release_date':'2017-08-10'},
         { 'vote_count' : 16, 'id' : 347629, 'video' : false, 'vote_average' : 4.7, 'title' : 'Thank You for Your Service','popularity':125.438883,'poster_path':'\/3AJfmBiEXVY7YmxRx2NSdbjuVDc.jpg','original_language':'en','original_title':'Thank You for Your Service','genre_ids':[18,10752],'backdrop_path':'\/7KpA2BswBFHLR7yIexkuVhpAK3x.jpg','adult':false,'overview':'A look at how Post Traumatic Stress Disorder affects American servicemen and women returning home from war.','release_date':'2017-10-26'},
         { 'vote_count' : 15, 'id' : 371638, 'video' : false, 'vote_average' : 7.5, 'title' : 'The Disaster Artist','popularity':90.699138,'poster_path':'\/jj84nF5vYRD0HUTowBKcrKk8hZP.jpg','original_language':'en','original_title':'The Disaster Artist','genre_ids':[18,35,36],'backdrop_path':'\/bAI7aPHQcvSZXvt7L11kMJdS0Gm.jpg','adult':false,'overview':'An aspiring actor in Hollywood meets an enigmatic stranger by the name of Tommy Wiseau, the meeting leads the actor down a path nobody could have predicted; creating the worst movie ever made.','release_date':'2017-12-01'},
         { 'vote_count' : 191, 'id' : 459202, 'video' : false, 'vote_average' : 5.3, 'title' : 'Boo 2! A Madea Halloween','popularity':85.439947,'poster_path':'\/5nvP4etJ8ecQv8qZM08dK4BAzdK.jpg','original_language':'en','original_title':'Boo 2! A Madea Halloween','genre_ids':[27,35],'backdrop_path':'\/78kN1a1AHxAPEh7hQhNjDQhLZ9W.jpg','adult':false,'overview':'Madea and the gang encounter monsters, goblins and boogeymen at a haunted campground.','release_date':'2017-10-20'}
    ],

    genres:  [
        {
            'id':   28,
            'name': 'Action'
        },
        {
            'id':   12,
            'name': 'Adventure'
        },
        {
            'id':   16,
            'name': 'Animation'
        },
        {
            'id':   35,
            'name': 'Comedy'
        },
        {
            'id':   80,
            'name': 'Crime'
        },
        {
            'id':   99,
            'name': 'Documentary'
        },
        {
            'id':   18,
            'name': 'Drama'
        },
        {
            'id':   10751,
            'name': 'Family'
        },
        {
            'id':   14,
            'name': 'Fantasy'
        },
        {
            'id':   36,
            'name': 'History'
        },
        {
            'id':   27,
            'name': 'Horror'
        },
        {
            'id':   10402,
            'name': 'Music'
        },
        {
            'id':   9648,
            'name': 'Mystery'
        },
        {
            'id':   10749,
            'name': 'Romance'
        },
        {
            'id':   878,
            'name': 'Science Fiction'
        },
        {
            'id':   10770,
            'name': 'TV Movie'
        },
        {
            'id':   53,
            'name': 'Thriller'
        },
        {
            'id':   10752,
            'name': 'War'
        },
        {
            'id':   37,
            'name': 'Western'
        }]
};

const feedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_NEW_MOVIES_SUCCESS:
            return state.push(payload.results);

        default:
            return state;
    }
};

export default feedReducer;

