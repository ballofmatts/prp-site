import { Component, OnInit } from '@angular/core';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'prp-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  faBeer = faBeer;
  seasonData = [
    {
      categoryName: 'Party Roll Seasons',
      seasons: [
        {
          title: 'Season 1: The Great Bugbear Caper',
          subtitle: 'Lost Mines of Phandelver',
          tagLine: 'The party rolling kicks off with the starter campaign for the fifth edition of Dungeons and Dragons! Tough battles are fought. Proud wizards are brought to humiliating lows. Defenseless goblins are brutally executed.',
          image: {
            url: 'assets/lost-mines-770x360.jpg'
          },
          system: 'Dungeons and Dragons 5e',
          credit: {
            label: 'Published module',
            data: 'The Lost Mines of Phandelver (Starter Set)'
          },
          players: [
            {
              character: 'Dungeon Master',
              name: 'Mark'
            },
            {
              character: 'Grick',
              name: 'Matt'
            },
            {
              character: 'Seth Roguen',
              name: 'Cory'
            },
            {
              character: 'Tekno Viking',
              name: 'Dusty'
            },
            {
              character: 'Whiz Ard',
              name: 'Steven'
            },
            {
              character: 'Engineer Rory',
              name: 'Rory'
            }
          ]
        },
        {
          title: 'Season 2: Escape to Greatworm Island',
          subtitle: 'An Original Mark Campaign',
          tagLine: 'Party with an all new cast as characters, responding to a royal summons from a mysterious island! Marvel at the amount of bear puns the gang can cram into a single season!',
          system: 'Dungeons and Dragons 5e',
          credit: {
            label: 'Campaign Creator',
            data: 'Mark'
          },
          players: [
            {
              character: 'Dungeon Master',
              name: 'Mark'
            },
            {
              character: 'Jedwyn Bogswallow',
              name: 'Steven'
            },
            {
              character: 'Fritz Fynn Fynkle',
              name: 'Cory'
            },
            {
              character: 'Barilla Stromboli',
              name: 'Dusty'
            },
            {
              character: 'CARL SEVEN',
              name: 'Matt'
            },
            {
              character: 'Fumbles O\'Shack-Hennessy',
              name: 'Vanessa'
            },
            {
              character: 'Engineer Rory',
              name: 'Rory'
            }
          ]
        },
        {
          title: 'Season 3: Iron and Sand',
          subtitle: 'An Original Cory Campaign',
          tagLine: 'A mysterious froggy merchant brings together a group of misfits to help him find a not-so-forgotten artifact…',
          system: 'Dungeons and Dragons 5e',
          credit: {
            label: 'Campaign Creator',
            data: 'Cory'
          },
          players: [
            {
              character: 'Dungeon Master',
              name: 'Cory'
            },
            {
              character: 'Ludwig “Beardless” Solovik',
              name: 'Steven'
            },
            {
              character: 'Perseverence',
              name: 'Mark'
            },
            {
              character: 'Bobby Snakeman',
              name: 'Dusty'
            },
            {
              character: 'Hudge the Dwarf',
              name: 'Matt'
            },
            {
              character: 'Prince Dandy Purplesash',
              name: 'Vanessa'
            },
            {
              character: 'G?ndry',
              name: 'Jose'
            },
            {
              character: 'Engineer Rory',
              name: 'Rory'
            }
          ]
        },
        {
          title: 'Season 4: Eye of the Storm',
          subtitle: 'An Original Steven Campaign',
          tagLine: 'A kingdom trapped by an ever churning storm, a king shamed by his past, a child chosen against his will, a mysterious man who knows too much, a party of misfits that will inadvertently kill enough innocent people to make a dictator blush.',
          image: {
            url: 'assets/s4header.jpg'
          },
          system: 'Dungeons and Dragons 5e',
          credit: {
            label: 'Campaign Creator',
            data: 'Steven'
          },
          players: [
            {
              character: 'Dungeon Master',
              name: 'Steven'
            },
            {
              character: 'Otto Von Ornstein',
              name: 'Cory'
            },
            {
              character: 'Sarn',
              name: 'Mark'
            },
            {
              character: 'Krimbim the Ejaculator',
              name: 'Dusty'
            },
            {
              character: 'Sledge (Sledric) "the Entertainer" Hammerdick',
              name: 'Matt'
            },
            {
              character: 'meeb',
              name: 'Vanessa'
            },
            {
              character: 'Dunab Hilgrute',
              name: 'Jose'
            },
            {
              character: 'Engineer Rory',
              name: 'Rory'
            }
          ]
        },
        {
          title: 'Season 5: Holiday in Barovia',
          subtitle: 'Curse of Strahd',
          tagLine: 'Dark forces coerce a band of misfits to the doors of a most welcoming home...',
          image: {
            url: 'assets/CurseofStrahd_thumb.jpg'
          },
          system: 'Dungeons and Dragons 5e',
          credit: {
            label: 'Published module',
            data: 'Curse of Strahd'
          },
          players: [
            {
              character: 'Dungeon Master',
              name: 'Mark'
            },
            {
              character: 'Frahd von Darkness Bloodsex',
              name: 'Dusty'
            },
            {
              character: 'Denis (DEHN-is) von Reinolds',
              name: 'Cory'
            },
            {
              character: 'Crusperton Sogbiscuit',
              name: 'Steven'
            },
            {
              character: 'Nigelious Crumbbottom',
              name: 'Matt'
            }
          ]
        }
      ]
    },
    {
      categoryName: 'Savage Roll Seasons',
      seasons: [
        {
          title: 'Season 1: Daddy Fucker Supreme 3000 AKA the Matt Damon Express',
          subtitle: 'An Original Steven Campaign',
          tagLine: 'A hearty crew of space-faring misfits comes across a ship that has... got some issues...',
          system: 'Savage Worlds',
          credit: {
            label: 'Campaign Creator',
            data: 'Steven'
          },
          players: [
            {
              character: 'Game Master',
              name: 'Steven'
            },
            {
              character: 'Yuri Tereshkova',
              name: 'Cory'
            },
            {
              character: 'Johnny "The Swinger"',
              name: 'Dusty'
            },
            {
              character: 'Dave Ryder',
              name: 'Matt'
            },
            {
              character: 'Sam Bingeater',
              name: 'Vanessa'
            },
            {
              character: 'Engineer Sexton Hardcastle',
              name: 'Rory'
            }
          ]
        },
        {
          title: 'Season 2: Shadows on the Tree Line',
          subtitle: 'An Original Steven Campaign',
          tagLine: 'A strange force has descended on this quiet Oregon town of Overpine. Children are missing and the feds have been called in. Will this party of misfits keep their sanity as they try to track down what\'s going on?',
          image: {
            url: 'assets/savageS2.jpg'
          },
          system: 'Savage Worlds',
          credit: {
            label: 'Campaign Creator',
            data: 'Steven'
          },
          players: [
            {
              character: 'Game Master',
              name: 'Steven'
            },
            {
              character: 'Scooter McGuffin',
              name: 'Cory'
            },
            {
              character: 'Dep. Kenneth Holloway',
              name: 'Mark'
            },
            {
              character: 'Agent Bob Johnson',
              name: 'Matt'
            },
            {
              character: 'Mable Agnes',
              name: 'Vanessa'
            },
            {
              character: 'Eric Deon',
              name: 'Rory'
            },
            {
              character: 'Kevin Kirkman',
              name: 'Jose'
            }
          ]
        }
      ]
    },
    {
      categoryName: 'Snack Roll Seasons',
      seasons: [
        {
          title: 'Season 1: Bear Minimum',
          subtitle: 'An Original Steven Campaign',
          tagLine: 'A party of misfits comes to the rescue of a small town being attacked by a ravenous beast.',
          system: 'Dungeons and Dragons 5e',
          credit: {
            label: 'Campaign Creator',
            data: 'Steven'
          },
          players: [
            {
              character: 'Dungeon Master',
              name: 'Steven'
            },
            {
              character: 'Humphrey Rogueart',
              name: 'Cory'
            },
            {
              character: 'Whistler',
              name: 'Mark'
            },
            {
              character: 'Rux the Elf',
              name: 'Matt'
            }
          ]
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
