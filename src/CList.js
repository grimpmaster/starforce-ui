import React, { Component } from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Icon,
  Image,
  Header,
  List,
  Statistic,
  Menu,
  Card,
  Segment,
  Label,
  Button
} from "semantic-ui-react";

const logo = require("./assets/logo.png");
const astro = require("./assets/astro.png");
const df19 = require("./assets/df19.jpg");
const lucas = require("./assets/Lucasarts_logo.svg.png");
const htiny = require("./assets/heroku-logo-stroke-purple.png");

const stateOptions = [
  { key: "Rebel Alliance", text: "Rebel Alliance", value: "Rebel Alliance" },
  { key: "Jedi Order", text: "Jedi Order", value: "Jedi Order" },
  { key: "The Resistance", text: "The Resistance", value: "The Resistance" },
  { key: "Galatic Empire", text: "Galatic Empire", value: "Galatic Empire" },
  { key: "Sith", text: "Sith", value: "Sith" },
  { key: "Smuggler", text: "Smuggler", value: "Smuggler" },
  { key: "Scavenger", text: "Scavenger", value: "Scavenger" },
  { key: "Neutral", text: "Neutral", value: "Neutral" },
  { key: "Bounty Hunter", text: "Bounty Hunter", value: "Bounty Hunter" }
];

const characters = [
  {
    id: "1",
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "66BBY",
    image_url: "luke-skywalker-main_5a38c454_461eebf5",
    gender: "male",
    planet_id: "1",
    created_date: "2014-12-09 13:50:51.644000Z",
    updated_date: "2014-12-20 21:17:56.891000Z",
    url: "https://swapi.co/api/people/1/",
    affiliations: ["Rebel Alliance", "Jedi Order"]
  },
  {
    id: "2",
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "76BBY",
    image_url: "C-3PO-See-Threepio_68fe125c",
    gender: "n/a",
    planet_id: "1",
    created_date: "2014-12-10 15:10:51.357000Z",
    updated_date: "2014-12-20 21:17:50.309000Z",
    url: "https://swapi.co/api/people/2/",
    affiliations: ["Rebel Alliance", "The Resistance"]
  },
  {
    id: "3",
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    image_url: "r2-d2_41dacaa9_68566da1",
    gender: "n/a",
    planet_id: "8",
    created_date: "2014-12-10 15:11:50.376000Z",
    updated_date: "2014-12-20 21:17:50.311000Z",
    url: "https://swapi.co/api/people/3/",
    affiliations: ["Rebel Alliance", "The Resistance"]
  },

  {
    id: "5",
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "66BBY",
    image_url: "leia-organa-feature-image_d0f5e953",
    gender: "female",
    planet_id: "2",
    created_date: "2014-12-10 15:20:09.791000Z",
    updated_date: "2014-12-20 21:17:50.315000Z",
    url: "https://swapi.co/api/people/5/",
    affiliations: ["Rebel Alliance", "The Resistance"]
  },
  {
    id: "6",
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    image_url: "databank_owenlars_01_169_effce0f8",
    gender: "male",
    planet_id: "1",
    created_date: "2014-12-10 15:52:14.024000Z",
    updated_date: "2014-12-20 21:17:50.317000Z",
    url: "https://swapi.co/api/people/6/",
    affiliations: ["Rebel Alliance", "Neutral"]
  },
  {
    id: "7",
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    image_url: "databank_berulars_01_169_68101518",
    gender: "female",
    planet_id: "1",
    created_date: "2014-12-10 15:53:41.121000Z",
    updated_date: "2014-12-20 21:17:50.319000Z",
    url: "https://swapi.co/api/people/7/",
    affiliations: ["Neutral"]
  },
  {
    id: "10",
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "77BBY",
    image_url: "Obi-Wan-Kenobi_6d775533",
    gender: "male",
    planet_id: "20",
    created_date: "2014-12-10 16:16:29.192000Z",
    updated_date: "2014-12-20 21:17:50.325000Z",
    url: "https://swapi.co/api/people/10/",
    affiliations: ["Jedi Order"]
  },
  {
    id: "11",
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "21BBY",
    image_url: "Anakin-Skywalker_d3330724",
    gender: "male",
    planet_id: "1",
    created_date: "2014-12-10 16:20:44.310000Z",
    updated_date: "2014-12-20 21:17:50.327000Z",
    url: "https://swapi.co/api/people/11/",
    affiliations: ["Jedi Order"]
  },
  {
    id: "13",
    name: "Chewbacca",
    height: "228",
    mass: "112",
    hair_color: "brown",
    skin_color: "brown",
    eye_color: "blue",
    birth_year: "200BBY",
    image_url: "solo-chewbacca-main_80768fa8",
    gender: "male",
    planet_id: "14",
    created_date: "2014-12-10 16:42:45.066000Z",
    updated_date: "2014-12-20 21:17:50.332000Z",
    url: "https://swapi.co/api/people/13/",
    affiliations: ["Rebel Alliance"]
  },
  {
    id: "14",
    name: "Han Solo",
    height: "180",
    mass: "80",
    hair_color: "brown",
    skin_color: "fair",
    eye_color: "brown",
    birth_year: "68BBY",
    image_url: "han-solo-main_a4c8ff79",
    gender: "male",
    planet_id: "22",
    created_date: "2014-12-10 16:49:14.582000Z",
    updated_date: "2014-12-20 21:17:50.334000Z",
    url: "https://swapi.co/api/people/14/",
    affiliations: ["Rebel Alliance", "Smuggler"]
  },
  {
    id: "15",
    name: "Greedo",
    height: "173",
    mass: "74",
    hair_color: "n/a",
    skin_color: "green",
    eye_color: "black",
    birth_year: "44BBY",
    image_url: "databank_greedo_01_169_3e4b96ef",
    gender: "male",
    planet_id: "23",
    created_date: "2014-12-10 17:03:30.334000Z",
    updated_date: "2014-12-20 21:17:50.336000Z",
    url: "https://swapi.co/api/people/15/",
    affiliations: ["Bounty Hunter", "Smuggler"]
  },
  {
    id: "16",
    name: "Jabba The Hutt",
    height: "175",
    mass: "1358",
    hair_color: "n/a",
    skin_color: "green-tan, brown",
    eye_color: "orange",
    birth_year: "600BBY",
    image_url: "Jabba-The-Hutt_b5a08a70",
    gender: "hermaphrodite",
    planet_id: "24",
    created_date: "2014-12-10 17:11:31.638000Z",
    updated_date: "2014-12-20 21:17:50.338000Z",
    url: "https://swapi.co/api/people/16/",
    affiliations: ["Smuggler"]
  },
  {
    id: "20",
    name: "Yoda",
    height: "66",
    mass: "17",
    hair_color: "white",
    skin_color: "green",
    eye_color: "brown",
    birth_year: "896BBY",
    image_url: "Yoda-Retina_2a7ecc26",
    gender: "male",
    planet_id: "28",
    created_date: "2014-12-15 12:26:01.042000Z",
    updated_date: "2014-12-20 21:17:50.345000Z",
    url: "https://swapi.co/api/people/20/",
    affiliations: ["Jedi Order"]
  },
  {
    id: "22",
    name: "Boba Fett",
    height: "183",
    mass: "78.2",
    hair_color: "black",
    skin_color: "fair",
    eye_color: "brown",
    birth_year: "31.5BBY",
    image_url: "Boba-Fett_61fdadfd",
    gender: "male",
    planet_id: "10",
    created_date: "2014-12-15 12:49:32.457000Z",
    updated_date: "2014-12-20 21:17:50.349000Z",
    url: "https://swapi.co/api/people/22/",
    affiliations: ["Bounty Hunter"]
  },
  {
    id: "84",
    name: "Finn",
    height: "175",
    mass: "87",
    hair_color: "black",
    skin_color: "dark",
    eye_color: "brown",
    birth_year: "26BBY",
    image_url: "finn-main_952e10d2",
    gender: "male",
    planet_id: "28",
    created_date: "2015-04-17 06:52:40.793621Z",
    updated_date: "2015-04-17 06:52:40.793674Z",
    url: "https://swapi.co/api/people/84/",
    affiliations: ["The First Order", "The Resistance"]
  },
  {
    id: "85",
    name: "Rey",
    height: "170",
    mass: "72",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "hazel",
    birth_year: "24BBY",
    image_url: "talj-rey-main-image-2_668bb5dc",
    gender: "female",
    planet_id: "28",
    created_date: "2015-04-17 06:54:01.495077Z",
    updated_date: "2015-04-17 06:54:01.495128Z",
    url: "https://swapi.co/api/people/85/",
    affiliations: ["Scavenger", "The Resistance"]
  },
  {
    id: "86",
    name: "Poe Dameron",
    height: "145",
    mass: "74",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "28BBY",
    image_url: "poe-dameron_70f5aee2",
    gender: "male",
    planet_id: "28",
    created_date: "2015-04-17 06:55:21.622786Z",
    updated_date: "2015-04-17 06:55:21.622835Z",
    url: "https://swapi.co/api/people/86/",
    affiliations: ["The Resistance"]
  },
  {
    id: "87",
    name: "BB8",
    height: "34",
    mass: "21",
    hair_color: "none",
    skin_color: "white orange",
    eye_color: "black",
    birth_year: "41BBY",
    image_url: "bb8-main_5111718b",
    gender: "none",
    planet_id: "28",
    created_date: "2015-04-17 06:57:38.061346Z",
    updated_date: "2015-04-17 06:57:38.061453Z",
    url: "https://swapi.co/api/people/87/",
    affiliations: ["The Resistance"]
  },
  {
    id: "4",
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "63BBY",
    image_url: "Darth-Vader_6bda9114",
    gender: "male",
    planet_id: "1",
    created_date: "2014-12-10 15:18:20.704000Z",
    updated_date: "2014-12-20 21:17:50.313000Z",
    url: "https://swapi.co/api/people/4/",
    affiliations: ["Galatic Empire", "Sith"]
  }
];

const desc = char => {
  const gender =
    char.gender === "male"
      ? "man"
      : char.gender === "female"
      ? "women"
      : char.gender === "hermaphrodite"
      ? "other gender"
      : "android";

  return (
    <>
      <Divider />
      <div style={{ float: "left" }}>
        <List>
          <List.Item>Eyes: {char.eye_color} </List.Item>
          <List.Item>Hair: {char.hair_color} </List.Item>
          <List.Item>Skin: {char.skin_color} </List.Item>
        </List>
      </div>
      <div style={{ float: "right" }}>
        <List>
          <List.Item>Height: {char.height} </List.Item>
          <List.Item>Mass: {char.mass} </List.Item>
          <List.Item>
            Gender: <Icon name={gender} size="large" />{" "}
          </List.Item>
        </List>
      </div>
    </>
  );
};

const menu = resetList => {
  return (
    <>
      <Menu fixed="top" inverted borderless>
      
        <Menu.Item onClick={resetList} header>
          <Image src={htiny} size={"tiny"} style={{ width: 120 }} />
          <Image src={logo} size={"small"} />
          <Label size='massive'color='violet' circular>19</Label>
        </Menu.Item>
        <Menu.Item position="right">
          <Image src={astro} size={"tiny"} />
          <Image src={df19} size={"small"} rounded style={{ float: "right" }} />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default class CList extends Component {
  constructor(props) {
    super(props);
    this.state = { characterList: [], isLoading: true };
  }

  componentDidMount() {}

  resetList = () => {
    this.setState({ characterList: [], isLoading: true });
  };

  loadCharacters = () => {
    this.setState({ characterList: characters, isLoading: false });
  };

  filterCharacters = (e, { value }) => {
    if (value.length === 0) {
      this.setState({ characterList: characters });
    }
    value.forEach(val => {
      let filteredList = characters.filter(char =>
        char.affiliations.includes(val.toString())
      );
      this.setState({ characterList: filteredList });
    });
  };

  render() {
    let { characterList, isLoading } = this.state;
    let {innerWidth, innerHeight} = window;
    let w = innerWidth/2;
    let h = (innerHeight/2)/2 - 100;
    return (
      <div style={{ backgroundColor: "black" }}>
        {menu(this.resetList)}
        <br />
        <Segment
          fluid
          inverted
          style={{ marginTop: "9.7em", textAlign: "center" }}
        >
          {isLoading && (
            <>
            <Image src={require("./assets/yoda.png")} size="medium" />
            <h1 style={{position:'absolute', top: h, right: 100, fontSize: 44}}>Full Stack Development</h1>
            <h2 style={{position:'absolute', top: h+100, right: 100, fontSize: 34}}>Semantic UI React &amp;</h2>
            <h2 style={{position:'absolute', top: h+150, right: 100, fontSize: 34}}> Java SpringBoot on Heroku</h2>
            </>
          )}
          {isLoading && (
            <Button
              inverted
              color={"yellow"}
              size="massive"
              style={{ float: "left" }}
              onClick={this.loadCharacters}
              disabled={!isLoading}
            >
              Load Data from API
            </Button>
          )}
          <Container>
            {!isLoading && (
              <Dropdown
                placeholder="Select allegiance"
                multiple
                style={{ fontSize: 16 }}
                search
                selection
                fluid
                options={stateOptions}
                onChange={this.filterCharacters}
              />
            )}
          </Container>
        </Segment>
        <Container style={{ textAlign: "center" }}>
          <Grid columns={3} style={{ marginTop: 2 }}>
            {characterList &&
              characterList.map(char => {
                let chracterImage =
                  "https://lumiere-a.akamaihd.net/v1/images/" +
                  char.image_url +
                  ".jpeg?width=300";
                return (
                  <Grid.Column>
                    <Card
                      fluid
                      image={chracterImage}
                      header={char.name}
                      meta={
                        <List.Item>
                          {char.birth_year.replace("BBY", " Years Old")}{" "}
                        </List.Item>
                      }
                      description={desc(char)}
                      extra={char.affiliations.map(aff => (
                        <Label style={{ fontSize: 12 }}>{aff}</Label>
                      ))}
                    />
                  </Grid.Column>
                );
              })}
          </Grid>
        </Container>
        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={16}>
                <Header inverted as="h4" content="Credits" />
                <p>
                  Special Thanks to <b>LucasArts Entertainment Company, LLC</b>{" "}
                  &amp;{" "}
                  <a href="http://www.starwars.com" target="_blank">
                    StarWars.com
                  </a>{" "}
                  for all StarsWars related content and imagery.
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image centered size="small" src={logo} />
            <Image centered size="tiny" src={htiny} />
            <Image centered size="small" src={lucas} />
          </Container>
        </Segment>
      </div>
    );
  }
}
