// Type definitions for pokedex-promise-v2 v4.x
// DO NOT MODIFY, THIS IS AUTO GENERATED
// Original code by: Mudkip <https://github.com/mudkipme/>
// Schema code by: HRKings <https://github.com/HRKings/>
// Execute 'npm run gentypes` to regenerate
declare module 'pokedex-promise-v2' {
    namespace PokeAPI {
        /** */
        interface APIResource {
            /** The URL of the referenced resource. */
            url: string;
        }

        interface APIResourceList {
            count: number;
            next: null | string;
            previous: null | string;
            results: APIResource[];
        }

        interface EndpointsList {
            ability: string;
            berry: string;
            "berry-firmness": string;
            "berry-flavor": string;
            characteristic: string;
            "contest-effect": string;
            "contest-type": string;
            "egg-group": string;
            "encounter-condition": string;
            "encounter-condition-value": string;
            "encounter-method": string;
            "evolution-chain": string;
            "evolution-trigger": string;
            gender: string;
            generation: string;
            "growth-rate": string;
            item: string;
            "item-attribute": string;
            "item-category": string;
            "item-fling-effect": string;
            "item-pocket": string;
            language: string;
            location: string;
            "location-area": string;
            machine: string;
            move: string;
            "move-ailment": string;
            "move-battle-style": string;
            "move-category": string;
            "move-damage-class": string;
            "move-learn-method": string;
            "move-target": string;
            nature: string;
            "pal-park-area": string;
            "pokeathlon-stat": string;
            pokedex: string;
            pokemon: string;
            "pokemon-color": string;
            "pokemon-form": string;
            "pokemon-habitat": string;
            "pokemon-shape": string;
            "pokemon-species": string;
            region: string;
            stat: string;
            "super-contest-effect": string;
            type: string;
            version: string;
            "version-group": string;
        }

        interface NamedAPIResource {
            /** The name of the referenced resource. */
            name: string;
            /** The URL of the referenced resource. */
            url: string;
        }

        /** */
        interface NamedAPIResourceList {
            /** The total number of resources available from this API. */
            count: number;
            /** The URL for the next page in the list. */
            next: null | string;
            /** The URL for the previous page in the list. */
            previous: null | string;
            /** A list of named API resources. */
            results: NamedAPIResource[];
        }

        interface NamedAPIResource {
            name: string;
            url: string;
        }

        /** Abilities provide passive effects for Pok??mon in battle or in the overworld. Pok??mon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail. */
        interface Ability {
            /** The list of previous effects this ability has had across version groups. */
            effect_changes: AbilityEffectChange[];
            /** The effect of this ability listed in different languages. */
            effect_entries: AbilityEffectEntry[];
            /** The flavor text of this ability listed in different languages. */
            flavor_text_entries: AbilityFlavorTextEntry[];
            /** The generation this ability originated in. */
            generation: NamedAPIResource;
            /** The identifier for this resource. */
            id: number;
            /** Whether or not this ability originated in the main series of the video games. */
            is_main_series: boolean;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: AbilityName[];
            /** A list of Pok??mon that could potentially have this ability. */
            pokemon: AbilityPokemon[];
        }

        interface AbilityEffectChange {
            /** The previous effect of this ability listed in different languages. */
            effect_entries: PurpleEffectEntry[];
            /** The version group in which the previous effect of this ability originated. */
            version_group: NamedAPIResource;
        }

        interface PurpleEffectEntry {
            effect: string;
            language: NamedAPIResource;
        }

        interface AbilityEffectEntry {
            effect: string;
            language: NamedAPIResource;
            short_effect: string;
        }

        interface AbilityFlavorTextEntry {
            flavor_text: string;
            language: NamedAPIResource;
            version_group: NamedAPIResource;
        }

        interface AbilityName {
            language: NamedAPIResource;
            name: string;
        }

        interface AbilityPokemon {
            /** Whether or not this a hidden ability for the referenced Pok??mon. */
            is_hidden: boolean;
            /** The Pok??mon this ability could belong to. */
            pokemon: NamedAPIResource;
            /** Pok??mon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon. */
            slot: number;
        }

        interface VersionGroupNamedList {
            count: number;
            next: null | string;
            previous: null | string;
            results: NamedAPIResource[];
        }

        /** Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pok??mon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail. */
        interface Berry {
            /** The firmness of this berry, used in making Pok??blocks or Poffins. */
            firmness: NamedAPIResource;
            /** A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry. */
            flavors: Flavor[];
            /** Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked. */
            growth_time: number;
            /** The identifier for this resource. */
            id: number;
            /** Berries are actually items. This is a reference to the item specific data for this berry. */
            item: NamedAPIResource;
            /** The maximum number of these berries that can grow on one tree in Generation IV. */
            max_harvest: number;
            /** The name for this resource. */
            name: string;
            /** The power of the move "Natural Gift" when used with this Berry. */
            natural_gift_power: number;
            /** The type inherited by "Natural Gift" when used with this Berry. */
            natural_gift_type: NamedAPIResource;
            /** The size of this Berry, in millimeters. */
            size: number;
            /** The smoothness of this Berry, used in making Pok??blocks or Poffins. */
            smoothness: number;
            /** The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly. */
            soil_dryness: number;
        }

        interface Flavor {
            flavor: NamedAPIResource;
            potency: number;
        }

        /** Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail. */
        interface BerryFirmness {
            /** A list of the berries with this firmness. */
            berries: NamedAPIResource[];
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: BerryFirmnessName[];
        }

        interface BerryFirmnessName {
            language: NamedAPIResource;
            name: string;
        }

        /** Flavors determine whether a Pok??mon will benefit or suffer from eating a berry based on their [nature](#natures). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail. */
        interface BerryFlavor {
            /** A list of the berries with this flavor. */
            berries: BerryElement[];
            /** The contest type that correlates with this berry flavor. */
            contest_type: NamedAPIResource;
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: BerryFlavorName[];
        }

        interface BerryElement {
            berry: NamedAPIResource;
            potency: number;
        }

        interface BerryFlavorName {
            language: NamedAPIResource;
            name: string;
        }

        /** Characteristics indicate which stat contains a Pok??mon's highest IV. A Pok??mon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail. */
        interface Characteristic {
            descriptions: CharacteristicDescription[];
            /** The remainder of the highest stat/IV divided by 5. */
            gene_modulo: number;
            highest_stat: NamedAPIResource;
            /** The identifier for this resource. */
            id: number;
            /** The possible values of the highest stat that would result in a Pok??mon recieving this characteristic when divided by 5. */
            possible_values: number[];
        }

        interface CharacteristicDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface SuperContestEffectList {
            count: number;
            next: null | string;
            previous: null | string;
            results: APIResource[];
        }

        /** Contest effects refer to the effects of moves when used in contests. */
        interface ContestEffect {
            /** The base number of hearts the user of this move gets. */
            appeal: number;
            /** The result of this contest effect listed in different languages. */
            effect_entries: ContestEffectEffectEntry[];
            /** The flavor text of this contest effect listed in different languages. */
            flavor_text_entries: ContestEffectFlavorTextEntry[];
            /** The identifier for this resource. */
            id: number;
            /** The base number of hearts the user's opponent loses. */
            jam: number;
        }

        interface ContestEffectEffectEntry {
            effect: string;
            language: NamedAPIResource;
        }

        interface ContestEffectFlavorTextEntry {
            flavor_text: string;
            language: NamedAPIResource;
        }

        /** Contest types are categories judges used to weigh a Pok??mon's condition in Pok??mon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail. */
        interface ContestType {
            /** The berry flavor that correlates with this contest type. */
            berry_flavor: NamedAPIResource;
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this contest type listed in different languages. */
            names: ContestTypeName[];
        }

        interface ContestTypeName {
            color: string;
            language: NamedAPIResource;
            name: string;
        }

        /** Egg Groups are categories which determine which Pok??mon are able to interbreed. Pok??mon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail. */
        interface EggGroup {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: EggGroupName[];
            /** A list of all Pok??mon species that are members of this egg group. */
            pokemon_species: NamedAPIResource[];
        }

        interface EggGroupName {
            language: NamedAPIResource;
            name: string;
        }

        /** Conditions which affect what pokemon might appear in the wild, e.g., day or night. */
        interface EncounterCondition {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: EncounterConditionName[];
            /** A list of possible values for this encounter condition. */
            values: NamedAPIResource[];
        }

        interface EncounterConditionName {
            language: NamedAPIResource;
            name: string;
        }

        /** Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night. */
        interface EncounterConditionValue {
            /** The condition this encounter condition value pertains to. */
            condition: NamedAPIResource;
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: EncounterConditionValueName[];
        }

        interface EncounterConditionValueName {
            language: NamedAPIResource;
            name: string;
        }

        /** Methods by which the player might can encounter Pok??mon in the wild, e.g., walking in tall grass. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Wild_Pok%C3%A9mon) for greater detail. */
        interface EncounterMethod {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: EncounterMethodName[];
            /** A good value for sorting. */
            order: number;
        }

        interface EncounterMethodName {
            language: NamedAPIResource;
            name: string;
        }

        /** Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pok??mon they can evolve into up through the hierarchy. */
        interface EvolutionChain {
            /** The item that a Pok??mon would be holding when mating that would trigger the egg hatching a baby Pok??mon rather than a basic Pok??mon. */
            baby_trigger_item: null | NamedAPIResource;
            /** The base chain link object. Each link contains evolution details for a Pok??mon in the chain. Each link references the next Pok??mon in the natural evolution order. */
            chain: Chain;
            /** The identifier for this resource. */
            id: number;
        }

        interface Chain {
            evolution_details: any[];
            evolves_to: ChainEvolvesTo[];
            is_baby: boolean;
            species: NamedAPIResource;
        }

        interface ChainEvolvesTo {
            evolution_details: PurpleEvolutionDetail[];
            evolves_to: EvolvesToEvolvesTo[];
            is_baby: boolean;
            species: NamedAPIResource;
        }

        interface PurpleEvolutionDetail {
            /** The id of the gender of the evolving Pok??mon species must be in order to evolve into this Pok??mon species. */
            gender: number | null;
            /** The item the evolving Pok??mon species must be holding during the evolution trigger event to evolve into this Pok??mon species. */
            held_item: null | NamedAPIResource;
            /** The item required to cause evolution this into Pok??mon species. */
            item: null | NamedAPIResource;
            /** The move that must be known by the evolving Pok??mon species during the evolution trigger event in order to evolve into this Pok??mon species. */
            known_move: null | NamedAPIResource;
            /** The evolving Pok??mon species must know a move with this type during the evolution trigger event in order to evolve into this Pok??mon species. */
            known_move_type: null | NamedAPIResource;
            /** The location the evolution must be triggered at. */
            location: null | NamedAPIResource;
            /** The minimum required level of affection the evolving Pok??mon species to evolve into this Pok??mon species. */
            min_affection: number | null;
            /** The minimum required level of beauty the evolving Pok??mon species to evolve into this Pok??mon species. */
            min_beauty: number | null;
            /** The minimum required level of happiness the evolving Pok??mon species to evolve into this Pok??mon species. */
            min_happiness: number | null;
            /** The minimum required level of the evolving Pok??mon species to evolve into this Pok??mon species. */
            min_level: number | null;
            /** Whether or not it must be raining in the overworld to cause evolution this Pok??mon species. */
            needs_overworld_rain: boolean;
            /** The Pok??mon species that must be in the players party in order for the evolving Pok??mon species to evolve into this Pok??mon species. */
            party_species: null | NamedAPIResource;
            /** The player must have a Pok??mon of this type in their party during the evolution trigger event in order for the evolving Pok??mon species to evolve into this Pok??mon species. */
            party_type: null | NamedAPIResource;
            /** The required relation between the Pok??mon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense. */
            relative_physical_stats: number | null;
            /** The required time of day. Day or night. */
            time_of_day: string;
            /** Pok??mon species for which this one must be traded. */
            trade_species: null | NamedAPIResource;
            /** The type of event that triggers evolution into this Pok??mon species. */
            trigger: NamedAPIResource;
            /** Whether or not the 3DS needs to be turned upside-down as this Pok??mon levels up. */
            turn_upside_down: boolean;
        }

        interface EvolvesToEvolvesTo {
            evolution_details: FluffyEvolutionDetail[];
            evolves_to: any[];
            is_baby: boolean;
            species: NamedAPIResource;
        }

        interface FluffyEvolutionDetail {
            /** The id of the gender of the evolving Pok??mon species must be in order to evolve into this Pok??mon species. */
            gender: number | null;
            /** The item the evolving Pok??mon species must be holding during the evolution trigger event to evolve into this Pok??mon species. */
            held_item: null | NamedAPIResource;
            /** The item required to cause evolution this into Pok??mon species. */
            item: null | NamedAPIResource;
            /** The move that must be known by the evolving Pok??mon species during the evolution trigger event in order to evolve into this Pok??mon species. */
            known_move: null | NamedAPIResource;
            /** The evolving Pok??mon species must know a move with this type during the evolution trigger event in order to evolve into this Pok??mon species. */
            known_move_type: null;
            /** The location the evolution must be triggered at. */
            location: null | NamedAPIResource;
            /** The minimum required level of affection the evolving Pok??mon species to evolve into this Pok??mon species. */
            min_affection: null;
            /** The minimum required level of beauty the evolving Pok??mon species to evolve into this Pok??mon species. */
            min_beauty: null;
            /** The minimum required level of happiness the evolving Pok??mon species to evolve into this Pok??mon species. */
            min_happiness: number | null;
            /** The minimum required level of the evolving Pok??mon species to evolve into this Pok??mon species. */
            min_level: number | null;
            /** Whether or not it must be raining in the overworld to cause evolution this Pok??mon species. */
            needs_overworld_rain: boolean;
            /** The Pok??mon species that must be in the players party in order for the evolving Pok??mon species to evolve into this Pok??mon species. */
            party_species: null;
            /** The player must have a Pok??mon of this type in their party during the evolution trigger event in order for the evolving Pok??mon species to evolve into this Pok??mon species. */
            party_type: null;
            /** The required relation between the Pok??mon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense. */
            relative_physical_stats: null;
            /** The required time of day. Day or night. */
            time_of_day: string;
            /** Pok??mon species for which this one must be traded. */
            trade_species: null;
            /** The type of event that triggers evolution into this Pok??mon species. */
            trigger: NamedAPIResource;
            /** Whether or not the 3DS needs to be turned upside-down as this Pok??mon levels up. */
            turn_upside_down: boolean;
        }

        /** Evolution triggers are the events and conditions that cause a Pok??mon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail. */
        interface EvolutionTrigger {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: EvolutionTriggerName[];
            /** A list of pokemon species that result from this evolution trigger. */
            pokemon_species: NamedAPIResource[];
        }

        interface EvolutionTriggerName {
            language: NamedAPIResource;
            name: string;
        }

        /** Genders were introduced in Generation II for the purposes of breeding Pok??mon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail. */
        interface Gender {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** A list of Pok??mon species that can be this gender and how likely it is that they will be. */
            pokemon_species_details: PokemonSpeciesDetail[];
            /** A list of Pok??mon species that required this gender in order for a Pok??mon to evolve into them. */
            required_for_evolution: NamedAPIResource[];
        }

        interface PokemonSpeciesDetail {
            pokemon_species: NamedAPIResource;
            rate: number;
        }

        /** A generation is a grouping of the Pok??mon games that separates them based on the Pok??mon they include. In each generation, a new set of Pok??mon, Moves, Abilities and Types that did not exist in the previous generation are released. */
        interface Generation {
            /** A list of abilities that were introduced in this generation. */
            abilities: NamedAPIResource[];
            /** The identifier for this resource. */
            id: number;
            /** The main region travelled in this generation. */
            main_region: NamedAPIResource;
            /** A list of moves that were introduced in this generation. */
            moves: NamedAPIResource[];
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: GenerationName[];
            /** A list of Pok??mon species that were introduced in this generation. */
            pokemon_species: NamedAPIResource[];
            /** A list of types that were introduced in this generation. */
            types: NamedAPIResource[];
            /** A list of version groups that were introduced in this generation. */
            version_groups: NamedAPIResource[];
        }

        interface GenerationName {
            language: NamedAPIResource;
            name: string;
        }

        /** Growth rates are the speed with which Pok??mon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail. */
        interface GrowthRate {
            /** The descriptions of this characteristic listed in different languages. */
            descriptions: GrowthRateDescription[];
            /** The formula used to calculate the rate at which the Pok??mon species gains level. */
            formula: string;
            /** The identifier for this resource. */
            id: number;
            /** A list of levels and the amount of experienced needed to atain them based on this growth rate. */
            levels: Level[];
            /** The name for this resource. */
            name: string;
            /** A list of Pok??mon species that gain levels at this growth rate. */
            pokemon_species: NamedAPIResource[];
        }

        interface GrowthRateDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface Level {
            experience: number;
            level: number;
        }

        /** An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pok??mon, or to access a new area. */
        interface Item {
            /** A list of attributes this item has. */
            attributes: NamedAPIResource[];
            /** An evolution chain this item requires to produce a bay during mating. */
            baby_trigger_for: null | APIResource;
            /** The category of items this item falls into. */
            category: NamedAPIResource;
            /** The price of this item in stores. */
            cost: number;
            /** The effect of this ability listed in different languages. */
            effect_entries: ItemEffectEntry[];
            /** The flavor text of this ability listed in different languages. */
            flavor_text_entries: ItemFlavorTextEntry[];
            /** The effect of the move Fling when used with this item. */
            fling_effect: null | NamedAPIResource;
            /** The power of the move Fling when used with this item. */
            fling_power: number | null;
            /** A list of game indices relevent to this item by generation. */
            game_indices: ItemGameIndex[];
            /** A list of Pok??mon that might be found in the wild holding this item. */
            held_by_pokemon: HeldByPokemon[];
            /** The identifier for this resource. */
            id: number;
            /** A list of the machines related to this item. */
            machines: ItemMachine[];
            /** The name for this resource. */
            name: string;
            /** The name of this item listed in different languages. */
            names: ItemName[];
            /** A set of sprites used to depict this item in the game. */
            sprites: ItemSprites;
        }

        interface ItemEffectEntry {
            effect: string;
            language: NamedAPIResource;
            short_effect: string;
        }

        interface ItemFlavorTextEntry {
            language: NamedAPIResource;
            text: string;
            version_group: NamedAPIResource;
        }

        interface ItemGameIndex {
            game_index: number;
            generation: NamedAPIResource;
        }

        interface HeldByPokemon {
            pokemon: NamedAPIResource;
            version_details: HeldByPokemonVersionDetail[];
        }

        interface HeldByPokemonVersionDetail {
            rarity: number;
            version: NamedAPIResource;
        }

        interface ItemMachine {
            machine: APIResource;
            version_group: NamedAPIResource;
        }

        interface ItemName {
            language: NamedAPIResource;
            name: string;
        }

        interface ItemSprites {
            /** The default depiction of this item. */
            default: string;
        }

        /** Item attributes define particular aspects of items, e.g. "usable in battle" or "consumable". */
        interface ItemAttribute {
            /** The description of this item attribute listed in different languages. */
            descriptions: ItemAttributeDescription[];
            /** The identifier for this resource. */
            id: number;
            /** A list of items that have this attribute. */
            items: NamedAPIResource[];
            /** The name for this resource. */
            name: string;
            /** The name of this item attribute listed in different languages. */
            names: ItemAttributeName[];
        }

        interface ItemAttributeDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface ItemAttributeName {
            language: NamedAPIResource;
            name: string;
        }

        /** Item categories determine where items will be placed in the players bag. */
        interface ItemCategory {
            /** The identifier for this resource. */
            id: number;
            /** A list of items that are a part of this category. */
            items: NamedAPIResource[];
            /** The name for this resource. */
            name: string;
            /** The name of this item category listed in different languages. */
            names: ItemCategoryName[];
            /** The pocket items in this category would be put in. */
            pocket: NamedAPIResource;
        }

        interface ItemCategoryName {
            language: NamedAPIResource;
            name: string;
        }

        /** The various effects of the move "Fling" when used with different items. */
        interface ItemFlingEffect {
            /** The result of this fling effect listed in different languages. */
            effect_entries: ItemFlingEffectEffectEntry[];
            /** The identifier for this resource. */
            id: number;
            /** A list of items that have this fling effect. */
            items: NamedAPIResource[];
            /** The name for this resource. */
            name: string;
        }

        interface ItemFlingEffectEffectEntry {
            effect: string;
            language: NamedAPIResource;
        }

        /** Pockets within the players bag used for storing items by category. */
        interface ItemPocket {
            /** A list of item categories that are relevant to this item pocket. */
            categories: NamedAPIResource[];
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: ItemPocketName[];
        }

        interface ItemPocketName {
            language: NamedAPIResource;
            name: string;
        }

        /** Languages for translations of API resource information. */
        interface Language {
            /** The identifier for this resource. */
            id: number;
            /** The two-letter code of the language. Note that it is not unique. */
            iso3166: string;
            /** The two-letter code of the country where this language is spoken. Note that it is not unique. */
            iso639: string;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: LanguageName[];
            /** Whether or not the games are published in this language. */
            official: boolean;
        }

        interface LanguageName {
            language: NamedAPIResource;
            name: string;
        }

        /** Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes. */
        interface Location {
            /** Areas that can be found within this location. */
            areas: NamedAPIResource[];
            /** A list of game indices relevent to this location by generation. */
            game_indices: LocationGameIndex[];
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: LocationName[];
            /** The region this location can be found in. */
            region: null | NamedAPIResource;
        }

        interface LocationGameIndex {
            game_index: number;
            generation: NamedAPIResource;
        }

        interface LocationName {
            language: NamedAPIResource;
            name: string;
        }

        /** Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pok??mon encounters. */
        interface LocationArea {
            /** A list of methods in which Pok??mon may be encountered in this area and how likely the method will occur depending on the version of the game. */
            encounter_method_rates: EncounterMethodRate[];
            /** The internal id of an API resource within game data. */
            game_index: number;
            /** The identifier for this resource. */
            id: number;
            /** The region this location area can be found in. */
            location: NamedAPIResource;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: LocationAreaName[];
            /** A list of Pok??mon that can be encountered in this area along with version specific details about the encounter. */
            pokemon_encounters: LocationAreaPokemonEncounter[];
        }

        interface EncounterMethodRate {
            /** The method in which Pok??mon may be encountered in an area.. */
            encounter_method: NamedAPIResource;
            /** The chance of the encounter to occur on a version of the game. */
            version_details: EncounterMethodRateVersionDetail[];
        }

        interface EncounterMethodRateVersionDetail {
            rate: number;
            version: NamedAPIResource;
        }

        interface LocationAreaName {
            language: NamedAPIResource;
            name: string;
        }

        interface LocationAreaPokemonEncounter {
            /** The Pok??mon being encountered. */
            pokemon: NamedAPIResource;
            /** A list of versions and encounters with Pok??mon that might happen in the referenced location area. */
            version_details: PokemonEncounterVersionDetail[];
        }

        interface PokemonEncounterVersionDetail {
            encounter_details: PurpleEncounterDetail[];
            max_chance: number;
            version: NamedAPIResource;
        }

        interface PurpleEncounterDetail {
            chance: number;
            condition_values: NamedAPIResource[];
            max_level: number;
            method: NamedAPIResource;
            min_level: number;
        }

        /** Machines are the representation of items that teach moves to Pok??mon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine. */
        interface Machine {
            /** The identifier for this resource. */
            id: number;
            /** The TM or HM item that corresponds to this machine. */
            item: NamedAPIResource;
            /** The move that is taught by this machine. */
            move: NamedAPIResource;
            /** The version group that this machine applies to. */
            version_group: NamedAPIResource;
        }

        /** Moves are the skills of Pok??mon in battle. In battle, a Pok??mon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas. */
        interface Move {
            /** The percent value of how likely this move is to be successful. */
            accuracy: number | null;
            /** A detail of normal and super contest combos that require this move. */
            contest_combos: null | ContestCombos;
            /** The effect the move has when used in a contest. */
            contest_effect: null | APIResource;
            /** The type of appeal this move gives a Pok??mon when used in a contest. */
            contest_type: null | NamedAPIResource;
            /** The type of damage the move inflicts on the target, e.g. physical. */
            damage_class: null | NamedAPIResource;
            /** The percent value of how likely it is this moves effect will happen. */
            effect_chance: number | null;
            /** The list of previous effects this move has had across version groups of the games. */
            effect_changes: MoveEffectChange[];
            /** The effect of this move listed in different languages. */
            effect_entries: MoveEffectEntry[];
            /** The flavor text of this move listed in different languages. */
            flavor_text_entries: MoveFlavorTextEntry[];
            /** The generation in which this move was introduced. */
            generation: NamedAPIResource;
            /** The identifier for this resource. */
            id: number;
            learned_by_pokemon: NamedAPIResource[];
            /** A list of the machines that teach this move. */
            machines: MoveMachine[];
            /** Metadata about this move */
            meta: null | Meta;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: MoveName[];
            /** A list of move resource value changes across version groups of the game. */
            past_values: PastValue[];
            /** The base power of this move with a value of 0 if it does not have a base power. */
            power: number | null;
            /** Power points. The number of times this move can be used. */
            pp: number | null;
            /** A value between -8 and 8. Sets the order in which moves are executed during battle. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Priority) for greater detail. */
            priority: number;
            /** A list of stats this moves effects and how much it effects them. */
            stat_changes: StatChange[];
            /** The effect the move has when used in a super contest. */
            super_contest_effect: null | APIResource;
            /** The type of target that will receive the effects of the attack. */
            target: NamedAPIResource;
            /** The elemental type of this move. */
            type: NamedAPIResource;
        }

        interface ContestCombos {
            normal: Normal;
            super: Super;
        }

        interface Normal {
            use_after: NamedAPIResource[] | null;
            use_before: NamedAPIResource[] | null;
        }

        interface Super {
            use_after: NamedAPIResource[] | null;
            use_before: NamedAPIResource[] | null;
        }

        interface MoveEffectChange {
            effect_entries: FluffyEffectEntry[];
            version_group: NamedAPIResource;
        }

        interface FluffyEffectEntry {
            effect: string;
            language: NamedAPIResource;
        }

        interface MoveEffectEntry {
            effect: string;
            language: NamedAPIResource;
            short_effect: string;
        }

        interface MoveFlavorTextEntry {
            flavor_text: string;
            language: NamedAPIResource;
            version_group: NamedAPIResource;
        }

        interface MoveMachine {
            machine: APIResource;
            version_group: NamedAPIResource;
        }

        interface Meta {
            ailment: NamedAPIResource;
            ailment_chance: number;
            category: NamedAPIResource;
            crit_rate: number;
            drain: number;
            flinch_chance: number;
            healing: number;
            max_hits: number | null;
            max_turns: number | null;
            min_hits: number | null;
            min_turns: number | null;
            stat_chance: number;
        }

        interface MoveName {
            language: NamedAPIResource;
            name: string;
        }

        interface PastValue {
            accuracy: number | null;
            effect_chance: number | null;
            effect_entries: PastValueEffectEntry[];
            power: number | null;
            pp: number | null;
            type: null | NamedAPIResource;
            version_group: NamedAPIResource;
        }

        interface PastValueEffectEntry {
            effect: string;
            language: NamedAPIResource;
            short_effect: string;
        }

        interface StatChange {
            change: number;
            stat: NamedAPIResource;
        }

        /** Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/http://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail. */
        interface MoveAilment {
            /** The identifier for this resource. */
            id: number;
            /** A list of moves that cause this ailment. */
            moves: NamedAPIResource[];
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: MoveAilmentName[];
        }

        interface MoveAilmentName {
            language: NamedAPIResource;
            name: string;
        }

        /** Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail. */
        interface MoveBattleStyle {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: MoveBattleStyleName[];
        }

        interface MoveBattleStyleName {
            language: NamedAPIResource;
            name: string;
        }

        /** Very general categories that loosely group move effects. */
        interface MoveCategory {
            /** The description of this resource listed in different languages. */
            descriptions: MoveCategoryDescription[];
            /** The identifier for this resource. */
            id: number;
            /** A list of moves that fall into this category. */
            moves: NamedAPIResource[];
            /** The name for this resource. */
            name: string;
        }

        interface MoveCategoryDescription {
            description: string;
            language: NamedAPIResource;
        }

        /** Damage classes moves can have, e.g. physical, special, or non-damaging. */
        interface MoveDamageClass {
            /** The description of this resource listed in different languages. */
            descriptions: MoveDamageClassDescription[];
            /** The identifier for this resource. */
            id: number;
            /** A list of moves that fall into this damage class. */
            moves: NamedAPIResource[];
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: MoveDamageClassName[];
        }

        interface MoveDamageClassDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface MoveDamageClassName {
            language: NamedAPIResource;
            name: string;
        }

        /** Methods by which Pok??mon can learn moves. */
        interface MoveLearnMethod {
            /** The description of this resource listed in different languages. */
            descriptions: MoveLearnMethodDescription[];
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: MoveLearnMethodName[];
            /** A list of version groups where moves can be learned through this method. */
            version_groups: NamedAPIResource[];
        }

        interface MoveLearnMethodDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface MoveLearnMethodName {
            language: NamedAPIResource;
            name: string;
        }

        /** Targets moves can be directed at during battle. Targets can be Pok??mon, environments or even other moves. */
        interface MoveTarget {
            /** The description of this resource listed in different languages. */
            descriptions: MoveTargetDescription[];
            /** The identifier for this resource. */
            id: number;
            /** A list of moves that that are directed at this target. */
            moves: NamedAPIResource[];
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: MoveTargetName[];
        }

        interface MoveTargetDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface MoveTargetName {
            language: NamedAPIResource;
            name: string;
        }

        /** Natures influence how a Pok??mon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail. */
        interface Nature {
            /** The stat decreased by 10% in Pok??mon with this nature. */
            decreased_stat: null | NamedAPIResource;
            /** The flavor hated by Pok??mon with this nature. */
            hates_flavor: null | NamedAPIResource;
            /** The identifier for this resource. */
            id: number;
            /** The stat increased by 10% in Pok??mon with this nature. */
            increased_stat: null | NamedAPIResource;
            /** The flavor liked by Pok??mon with this nature. */
            likes_flavor: null | NamedAPIResource;
            /** A list of battle styles and how likely a Pok??mon with this nature is to use them in the Battle Palace or Battle Tent. */
            move_battle_style_preferences: MoveBattleStylePreference[];
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: NatureName[];
            /** A list of Pok??athlon stats this nature effects and how much it effects them. */
            pokeathlon_stat_changes: PokeathlonStatChange[];
        }

        interface MoveBattleStylePreference {
            /** Chance of using the move, in percent, if HP is over one half. */
            high_hp_preference: number;
            /** Chance of using the move, in percent, if HP is under one half. */
            low_hp_preference: number;
            /** The move battle style. */
            move_battle_style: NamedAPIResource;
        }

        interface NatureName {
            language: NamedAPIResource;
            name: string;
        }

        interface PokeathlonStatChange {
            max_change: number;
            pokeathlon_stat: NamedAPIResource;
        }

        /** Areas used for grouping Pok??mon encounters in Pal Park. They're like habitats that are specific to [Pal Park](https://bulbapedia.bulbagarden.net/wiki/Pal_Park). */
        interface PalParkArea {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: PalParkAreaName[];
            /** A list of Pok??mon encountered in thi pal park area along with details. */
            pokemon_encounters: PalParkAreaPokemonEncounter[];
        }

        interface PalParkAreaName {
            language: NamedAPIResource;
            name: string;
        }

        interface PalParkAreaPokemonEncounter {
            base_score: number;
            pokemon_species: NamedAPIResource;
            rate: number;
        }

        /** Pokeathlon Stats are different attributes of a Pok??mon's performance in Pok??athlons. In Pok??athlons, competitions happen on different courses; one for each of the different Pok??athlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail. */
        interface PokeathlonStat {
            /** A detail of natures which affect this Pok??athlon stat positively or negatively. */
            affecting_natures: PokeathlonStatAffectingNatures;
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: PokeathlonStatName[];
        }

        interface PokeathlonStatAffectingNatures {
            decrease: AffectingNaturesDecrease[];
            increase: AffectingNaturesIncrease[];
        }

        interface AffectingNaturesDecrease {
            max_change: number;
            nature: NamedAPIResource;
        }

        interface AffectingNaturesIncrease {
            max_change: number;
            nature: NamedAPIResource;
        }

        interface PokeathlonStatName {
            language: NamedAPIResource;
            name: string;
        }

        /** A Pok??dex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pok??mon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail. */
        interface Pokedex {
            /** The description of this resource listed in different languages. */
            descriptions: PokedexDescription[];
            /** The identifier for this resource. */
            id: number;
            /** Whether or not this Pok??dex originated in the main series of the video games. */
            is_main_series: boolean;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: PokedexName[];
            /** A list of Pok??mon catalogued in this Pok??dex and their indexes. */
            pokemon_entries: PokemonEntry[];
            /** The region this Pok??dex catalogues Pok??mon for. */
            region: null | NamedAPIResource;
            /** A list of version groups this Pok??dex is relevant to. */
            version_groups: NamedAPIResource[];
        }

        interface PokedexDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface PokedexName {
            language: NamedAPIResource;
            name: string;
        }

        interface PokemonEntry {
            /** The index of this Pok??mon species entry within the Pok??dex. */
            entry_number: number;
            /** The Pok??mon species being encountered. */
            pokemon_species: NamedAPIResource;
        }

        interface PokemonEncounter {
            location_area: NamedAPIResource;
            version_details: PokemonEncounterVersionDetailObject[];
        }

        interface PokemonEncounterVersionDetailObject {
            encounter_details: FluffyEncounterDetail[];
            max_chance: number;
            version: NamedAPIResource;
        }

        interface FluffyEncounterDetail {
            chance: number;
            condition_values: NamedAPIResource[];
            max_level: number;
            method: NamedAPIResource;
            min_level: number;
        }

        /** Pok??mon are the creatures that inhabit the world of the Pok??mon games. They can be caught using Pok??balls and trained by battling with other Pok??mon.  Each Pok??mon belongs to a specific species but may take on a variant which makes it differ from other Pok??mon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail. */
        interface Pokemon {
            /** A list of abilities this Pok??mon could potentially have. */
            abilities: AbilityElement[];
            /** The base experience gained for defeating this Pok??mon. */
            base_experience: number;
            /** A list of forms this Pok??mon can take on. */
            forms: NamedAPIResource[];
            /** A list of game indices relevent to Pok??mon item by generation. */
            game_indices: PokemonGameIndex[];
            /** The height of this Pok??mon in decimetres. */
            height: number;
            /** A list of items this Pok??mon may be holding when encountered. */
            held_items: HeldItem[];
            /** The identifier for this resource. */
            id: number;
            /** Set for exactly one Pok??mon used as the default for each species. */
            is_default: boolean;
            /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
            location_area_encounters: string;
            /** A list of moves along with learn methods and level details pertaining to specific version groups. */
            moves: MoveElement[];
            /** The name for this resource. */
            name: string;
            /** Order for sorting. Almost national order, except families are grouped together. */
            order: number;
            past_types: PastType[];
            /** The species this Pok??mon belongs to. */
            species: NamedAPIResource;
            /** A set of sprites used to depict this Pok??mon in the game. A visual representation of the various sprites can be found at <a href='https://github.com/PokeAPI/sprites#sprites'>PokeAPI/sprites</a> */
            sprites: PokemonSprites;
            /** A list of base stat values for this Pok??mon. */
            stats: StatElement[];
            /** A list of details showing types this Pok??mon has. */
            types: PokemonType[];
            /** The weight of this Pok??mon in hectograms. */
            weight: number;
        }

        interface AbilityElement {
            ability: NamedAPIResource;
            is_hidden: boolean;
            slot: number;
        }

        interface PokemonGameIndex {
            game_index: number;
            version: NamedAPIResource;
        }

        interface HeldItem {
            item: NamedAPIResource;
            version_details: HeldItemVersionDetail[];
        }

        interface HeldItemVersionDetail {
            rarity: number;
            version: NamedAPIResource;
        }

        interface MoveElement {
            move: NamedAPIResource;
            version_group_details: VersionGroupDetail[];
        }

        interface VersionGroupDetail {
            level_learned_at: number;
            move_learn_method: NamedAPIResource;
            version_group: NamedAPIResource;
        }

        interface PastType {
            generation: NamedAPIResource;
            types: PastTypeType[];
        }

        interface PastTypeType {
            slot: number;
            type: NamedAPIResource;
        }

        interface PokemonSprites {
            /** The default depiction of this Pok??mon from the back in battle. */
            back_default: null | string;
            /** The female depiction of this Pok??mon from the back in battle. */
            back_female: null | string;
            /** The shiny depiction of this Pok??mon from the back in battle. */
            back_shiny: null | string;
            /** The shiny female depiction of this Pok??mon from the back in battle. */
            back_shiny_female: null | string;
            /** The default depiction of this Pok??mon from the front in battle. */
            front_default: null | string;
            /** The female depiction of this Pok??mon from the front in battle. */
            front_female: null | string;
            /** The shiny depiction of this Pok??mon from the front in battle. */
            front_shiny: null | string;
            /** The shiny female depiction of this Pok??mon from the front in battle. */
            front_shiny_female: null | string;
            other: Other;
            versions: Versions;
        }

        interface Other {
            dream_world: DreamWorld;
            "official-artwork": OfficialArtwork;
        }

        interface DreamWorld {
            front_default: null | string;
            front_female: null | string;
        }

        interface OfficialArtwork {
            front_default: null | string;
        }

        interface Versions {
            "generation-i": GenerationI;
            "generation-ii": GenerationIi;
            "generation-iii": GenerationIii;
            "generation-iv": GenerationIv;
            "generation-v": GenerationV;
            "generation-vi": GenerationVi;
            "generation-vii": GenerationVii;
            "generation-viii": GenerationViii;
        }

        interface GenerationI {
            "red-blue": RedBlue;
            yellow: Yellow;
        }

        interface RedBlue {
            back_default: null | string;
            back_gray: null | string;
            front_default: null | string;
            front_gray: null | string;
        }

        interface Yellow {
            back_default: null | string;
            back_gray: null | string;
            front_default: null | string;
            front_gray: null | string;
        }

        interface GenerationIi {
            crystal: Crystal;
            gold: Gold;
            silver: Silver;
        }

        interface Crystal {
            back_default: null | string;
            back_shiny: null | string;
            front_default: null | string;
            front_shiny: null | string;
        }

        interface Gold {
            back_default: null | string;
            back_shiny: null | string;
            front_default: null | string;
            front_shiny: null | string;
        }

        interface Silver {
            back_default: null | string;
            back_shiny: null | string;
            front_default: null | string;
            front_shiny: null | string;
        }

        interface GenerationIii {
            emerald: Emerald;
            "firered-leafgreen": FireredLeafgreen;
            "ruby-sapphire": RubySapphire;
        }

        interface Emerald {
            front_default: null | string;
            front_shiny: null | string;
        }

        interface FireredLeafgreen {
            back_default: null | string;
            back_shiny: null | string;
            front_default: null | string;
            front_shiny: null | string;
        }

        interface RubySapphire {
            back_default: null | string;
            back_shiny: null | string;
            front_default: null | string;
            front_shiny: null | string;
        }

        interface GenerationIv {
            "diamond-pearl": DiamondPearl;
            "heartgold-soulsilver": HeartgoldSoulsilver;
            platinum: Platinum;
        }

        interface DiamondPearl {
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface HeartgoldSoulsilver {
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface Platinum {
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface GenerationV {
            "black-white": BlackWhite;
        }

        interface BlackWhite {
            animated: Animated;
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface Animated {
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface GenerationVi {
            "omegaruby-alphasapphire": OmegarubyAlphasapphire;
            "x-y": XY;
        }

        interface OmegarubyAlphasapphire {
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface XY {
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface GenerationVii {
            icons: GenerationViiIcons;
            "ultra-sun-ultra-moon": UltraSunUltraMoon;
        }

        interface GenerationViiIcons {
            front_default: null | string;
            front_female: null | string;
        }

        interface UltraSunUltraMoon {
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface GenerationViii {
            icons: GenerationViiiIcons;
        }

        interface GenerationViiiIcons {
            front_default: null | string;
            front_female: null | string;
        }

        interface StatElement {
            base_stat: number;
            effort: number;
            stat: NamedAPIResource;
        }

        interface PokemonType {
            /** The order the Pok??mon's types are listed in. */
            slot: number;
            /** The type the referenced Pok??mon has. */
            type: NamedAPIResource;
        }

        /** Colors used for sorting Pok??mon in a Pok??dex. The color listed in the Pok??dex is usually the color most apparent or covering each Pok??mon's body. No orange category exists; Pok??mon that are primarily orange are listed as red or brown. */
        interface PokemonColor {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: PokemonColorName[];
            /** A list of the Pok??mon species that have this color. */
            pokemon_species: NamedAPIResource[];
        }

        interface PokemonColorName {
            language: NamedAPIResource;
            name: string;
        }

        /** Some Pok??mon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pok??mon species, which do differ in more than just visuals, the 'Pok??mon' entity is used to represent such a variety. */
        interface PokemonForm {
            /** The name of this form. */
            form_name: string;
            /** The form specific form name of this Pok??mon form, or empty if the form does not have a specific name. */
            form_names: FormName[];
            /** The order in which forms should be sorted within a species' forms. */
            form_order: number;
            /** The identifier for this resource. */
            id: number;
            /** Whether or not this form can only happen during battle. */
            is_battle_only: boolean;
            /** True for exactly one form used as the default for each Pok??mon. */
            is_default: boolean;
            /** Whether or not this form requires mega evolution. */
            is_mega: boolean;
            /** The name for this resource. */
            name: string;
            /** The form specific full name of this Pok??mon form, or empty if the form does not have a specific name. */
            names: PokemonFormName[];
            /** The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name. */
            order: number;
            /** The Pok??mon that can take on this form. */
            pokemon: NamedAPIResource;
            /** A set of sprites used to depict this Pok??mon form in the game. */
            sprites: PokemonFormSprites;
            types: PokemonFormType[];
            /** The version group this Pok??mon form was introduced in. */
            version_group: NamedAPIResource;
        }

        interface FormName {
            language: NamedAPIResource;
            name: string;
        }

        interface PokemonFormName {
            language: NamedAPIResource;
            name: string;
        }

        interface PokemonFormSprites {
            /** The default depiction of this Pok??mon form from the back in battle. */
            back_default: null | string;
            back_female: null | string;
            /** The shiny depiction of this Pok??mon form from the back in battle. */
            back_shiny: null | string;
            back_shiny_female: null | string;
            /** The default depiction of this Pok??mon form from the front in battle. */
            front_default: null | string;
            front_female: null | string;
            /** The shiny depiction of this Pok??mon form from the front in battle. */
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface PokemonFormType {
            slot: number;
            type: NamedAPIResource;
        }

        /** Habitats are generally different terrain Pok??mon can be found in but can also be areas designated for rare or legendary Pok??mon. */
        interface PokemonHabitat {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: PokemonHabitatName[];
            /** A list of the Pok??mon species that can be found in this habitat. */
            pokemon_species: NamedAPIResource[];
        }

        interface PokemonHabitatName {
            language: NamedAPIResource;
            name: string;
        }

        /** Shapes used for sorting Pok??mon in a Pok??dex. */
        interface PokemonShape {
            /** The "scientific" name of this Pok??mon shape listed in different languages. */
            awesome_names: AwesomeName[];
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: PokemonShapeName[];
            /** A list of the Pok??mon species that have this shape. */
            pokemon_species: NamedAPIResource[];
        }

        interface AwesomeName {
            /** The localized "scientific" name for an API resource in a specific language. */
            awesome_name: string;
            /** The language this "scientific" name is in. */
            language: NamedAPIResource;
        }

        interface PokemonShapeName {
            language: NamedAPIResource;
            name: string;
        }

        /** A Pok??mon Species forms the basis for at least one Pok??mon. Attributes of a Pok??mon species are shared across all varieties of Pok??mon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant. */
        interface PokemonSpecies {
            /** The happiness when caught by a normal Pok??ball; up to 255. The higher the number, the happier the Pok??mon. */
            base_happiness: number;
            /** The base capture rate; up to 255. The higher the number, the easier the catch. */
            capture_rate: number;
            /** The color of this Pok??mon for Pok??dex search. */
            color: NamedAPIResource;
            /** A list of egg groups this Pok??mon species is a member of. */
            egg_groups: NamedAPIResource[];
            /** The evolution chain this Pok??mon species is a member of. */
            evolution_chain: APIResource;
            /** The Pok??mon species that evolves into this Pokemon_species. */
            evolves_from_species: null | NamedAPIResource;
            /** A list of flavor text entries for this Pok??mon species. */
            flavor_text_entries: PokemonSpeciesFlavorTextEntry[];
            /** Descriptions of different forms Pok??mon take on within the Pok??mon species. */
            form_descriptions: FormDescription[];
            /** Whether or not this Pok??mon has multiple forms and can switch between them. */
            forms_switchable: boolean;
            /** The chance of this Pok??mon being female, in eighths; or -1 for genderless. */
            gender_rate: number;
            /** The genus of this Pok??mon species listed in multiple languages. */
            genera: Genus[];
            /** The generation this Pok??mon species was introduced in. */
            generation: NamedAPIResource;
            /** The rate at which this Pok??mon species gains levels. */
            growth_rate: NamedAPIResource;
            /** The habitat this Pok??mon species can be encountered in. */
            habitat: null | NamedAPIResource;
            /** Whether or not this Pok??mon has visual gender differences. */
            has_gender_differences: boolean;
            /** Initial hatch counter: one must walk 255 ?? (hatch_counter + 1) steps before this Pok??mon's egg hatches, unless utilizing bonuses like Flame Body's. */
            hatch_counter: number;
            /** The identifier for this resource. */
            id: number;
            /** Whether or not this is a baby Pok??mon. */
            is_baby: boolean;
            /** Whether or not this is a legendary Pok??mon. */
            is_legendary: boolean;
            /** Whether or not this is a mythical Pok??mon. */
            is_mythical: boolean;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: PokemonSpeciesName[];
            /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage. */
            order: number;
            /** A list of encounters that can be had with this Pok??mon species in pal park. */
            pal_park_encounters: PalParkEncounter[];
            /** A list of Pokedexes and the indexes reserved within them for this Pok??mon species. */
            pokedex_numbers: PokedexNumber[];
            /** The shape of this Pok??mon for Pok??dex search. */
            shape: NamedAPIResource;
            /** A list of the Pok??mon that exist within this Pok??mon species. */
            varieties: Variety[];
        }

        interface PokemonSpeciesFlavorTextEntry {
            flavor_text: string;
            language: NamedAPIResource;
            version: NamedAPIResource;
        }

        interface FormDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface Genus {
            /** The localized genus for the referenced Pok??mon species */
            genus: string;
            /** The language this genus is in. */
            language: NamedAPIResource;
        }

        interface PokemonSpeciesName {
            language: NamedAPIResource;
            name: string;
        }

        interface PalParkEncounter {
            area: NamedAPIResource;
            base_score: number;
            rate: number;
        }

        interface PokedexNumber {
            entry_number: number;
            pokedex: NamedAPIResource;
        }

        interface Variety {
            is_default: boolean;
            pokemon: NamedAPIResource;
        }

        /** A region is an organized area of the Pok??mon world. Most often, the main difference between regions is the species of Pok??mon that can be encountered within them. */
        interface Region {
            /** The identifier for this resource. */
            id: number;
            /** A list of locations that can be found in this region. */
            locations: NamedAPIResource[];
            /** The generation this region was introduced in. */
            main_generation: NamedAPIResource;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: RegionName[];
            /** A list of pok??dexes that catalogue Pok??mon in this region. */
            pokedexes: NamedAPIResource[];
            /** A list of version groups where this region can be visited. */
            version_groups: NamedAPIResource[];
        }

        interface RegionName {
            language: NamedAPIResource;
            name: string;
        }

        /** Stats determine certain aspects of battles. Each Pok??mon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. */
        interface Stat {
            /** A detail of moves which affect this stat positively or negatively. */
            affecting_moves: AffectingMoves;
            /** A detail of natures which affect this stat positively or negatively. */
            affecting_natures: StatAffectingNatures;
            /** A list of characteristics that are set on a Pok??mon when its highest base stat is this stat. */
            characteristics: APIResource[];
            /** ID the games use for this stat. */
            game_index: number;
            /** The identifier for this resource. */
            id: number;
            /** Whether this stat only exists within a battle. */
            is_battle_only: boolean;
            /** The class of damage this stat is directly related to. */
            move_damage_class: null | NamedAPIResource;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: StatName[];
        }

        interface AffectingMoves {
            decrease: AffectingMovesDecrease[];
            increase: AffectingMovesIncrease[];
        }

        interface AffectingMovesDecrease {
            change: number;
            move: NamedAPIResource;
        }

        interface AffectingMovesIncrease {
            change: number;
            move: NamedAPIResource;
        }

        interface StatAffectingNatures {
            decrease: NamedAPIResource[];
            increase: NamedAPIResource[];
        }

        interface StatName {
            language: NamedAPIResource;
            name: string;
        }

        /** Super contest effects refer to the effects of moves when used in super contests. */
        interface SuperContestEffect {
            /** The level of appeal this super contest effect has. */
            appeal: number;
            /** The flavor text of this super contest effect listed in different languages. */
            flavor_text_entries: SuperContestEffectFlavorTextEntry[];
            /** The identifier for this resource. */
            id: number;
            /** A list of moves that have the effect when used in super contests. */
            moves: NamedAPIResource[];
        }

        interface SuperContestEffectFlavorTextEntry {
            flavor_text: string;
            language: NamedAPIResource;
        }

        /** Types are properties for Pok??mon and their moves. Each type has three properties: which types of Pok??mon it is super effective against, which types of Pok??mon it is not very effective against, and which types of Pok??mon it is completely ineffective against. */
        interface Type {
            /** A detail of how effective this type is toward others and vice versa. */
            damage_relations: TypeDamageRelations;
            /** A list of game indices relevent to this item by generation. */
            game_indices: TypeGameIndex[];
            /** The generation this type was introduced in. */
            generation: NamedAPIResource;
            /** The identifier for this resource. */
            id: number;
            /** The class of damage inflicted by this type. */
            move_damage_class: null | NamedAPIResource;
            /** A list of moves that have this type. */
            moves: NamedAPIResource[];
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: TypeName[];
            past_damage_relations: PastDamageRelation[];
            /** A list of details of Pok??mon that have this type. */
            pokemon: TypePokemon[];
        }

        interface TypeDamageRelations {
            double_damage_from: NamedAPIResource[];
            double_damage_to: NamedAPIResource[];
            half_damage_from: NamedAPIResource[];
            half_damage_to: NamedAPIResource[];
            no_damage_from: NamedAPIResource[];
            no_damage_to: NamedAPIResource[];
        }

        interface TypeGameIndex {
            game_index: number;
            generation: NamedAPIResource;
        }

        interface TypeName {
            language: NamedAPIResource;
            name: string;
        }

        interface PastDamageRelation {
            damage_relations: PastDamageRelationDamageRelations;
            generation: NamedAPIResource;
        }

        interface PastDamageRelationDamageRelations {
            double_damage_from: NamedAPIResource[];
            double_damage_to: NamedAPIResource[];
            half_damage_from: NamedAPIResource[];
            half_damage_to: NamedAPIResource[];
            no_damage_from: NamedAPIResource[];
            no_damage_to: NamedAPIResource[];
        }

        interface TypePokemon {
            /** The Pok??mon that has the referenced type. */
            pokemon: NamedAPIResource;
            /** The order the Pok??mon's types are listed in. */
            slot: number;
        }

        /** Versions of the games, e.g., Red, Blue or Yellow. */
        interface Version {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: VersionName[];
            /** The version group this version belongs to. */
            version_group: NamedAPIResource;
        }

        interface VersionName {
            language: NamedAPIResource;
            name: string;
        }

        /** Version groups categorize highly similar versions of the games. */
        interface VersionGroup {
            /** The generation this version was introduced in. */
            generation: NamedAPIResource;
            /** The identifier for this resource. */
            id: number;
            /** A list of methods in which Pok??mon can learn moves in this version group. */
            move_learn_methods: NamedAPIResource[];
            /** The name for this resource. */
            name: string;
            /** Order for sorting. Almost by date of release, except similar versions are grouped together. */
            order: number;
            /** A list of Pok??dexes introduces in this version group. */
            pokedexes: NamedAPIResource[];
            /** A list of regions that can be visited in this version group. */
            regions: NamedAPIResource[];
            /** The versions this version group owns. */
            versions: NamedAPIResource[];
        }

        interface RootEndPointInterval {
            limit?: number;
            offset?: number;
        }
    }

    interface PokeApiOptions {
        protocol?: "https" | "http";
        hostName?: string;
        versionPath?: string;
        cacheLimit?: number;
        timeout?: number;
    }

    class PokeAPI {
        constructor(options?: PokeApiOptions);
        resource(path: string): Promise<unknown>;
        resource(paths: string[]): Promise<unknown[]>;
        resource(paths: string[]): Promise<unknown[]>;
        resource<T>(path: string): Promise<T>;
        resource<T>(paths: string[]): Promise<T[]>;
        getBerryByName(nameOrId: string | number): Promise<PokeAPI.Berry>;
        getBerryByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Berry[]>;
        getBerryFirmnessByName(nameOrId: string | number): Promise<PokeAPI.BerryFirmness>;
        getBerryFirmnessByName(nameOrIds: Array<string | number>): Promise<PokeAPI.BerryFirmness[]>;
        getBerryFlavorByName(nameOrId: string | number): Promise<PokeAPI.BerryFlavor>;
        getBerryFlavorByName(nameOrIds: Array<string | number>): Promise<PokeAPI.BerryFlavor[]>;
        getContestTypeByName(nameOrId: string | number): Promise<PokeAPI.ContestType>;
        getContestTypeByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ContestType[]>;
        getContestEffectById(id: number): Promise<PokeAPI.ContestEffect>;
        getContestEffectById(ids: number[]): Promise<PokeAPI.ContestEffect[]>;
        getSuperContestEffectById(id: number): Promise<PokeAPI.SuperContestEffect>;
        getSuperContestEffectById(ids: number[]): Promise<PokeAPI.SuperContestEffect[]>;
        getEncounterMethodByName(nameOrId: string | number): Promise<PokeAPI.EncounterMethod>;
        getEncounterMethodByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EncounterMethod[]>;
        getEncounterConditionByName(nameOrId: string | number): Promise<PokeAPI.EncounterCondition>;
        getEncounterConditionByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EncounterCondition[]>;
        getEncounterConditionValueByName(nameOrId: string | number): Promise<PokeAPI.EncounterConditionValue>;
        getEncounterConditionValueByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EncounterConditionValue[]>;
        getEvolutionChainById(id: number): Promise<PokeAPI.EvolutionChain>;
        getEvolutionChainById(ids: number[]): Promise<PokeAPI.EvolutionChain[]>;
        getEvolutionTriggerByName(nameOrId: string | number): Promise<PokeAPI.EvolutionTrigger>;
        getEvolutionTriggerByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EvolutionTrigger[]>;
        getGenerationByName(nameOrId: string | number): Promise<PokeAPI.Generation>;
        getGenerationByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Generation[]>;
        getPokedexByName(nameOrId: string | number): Promise<PokeAPI.Pokedex>;
        getPokedexByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Pokedex[]>;
        getVersionByName(nameOrId: string | number): Promise<PokeAPI.Version>;
        getVersionByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Version[]>;
        getVersionGroupByName(nameOrId: string | number): Promise<PokeAPI.VersionGroup>;
        getVersionGroupByName(nameOrIds: Array<string | number>): Promise<PokeAPI.VersionGroup[]>;
        getItemByName(nameOrId: string | number): Promise<PokeAPI.Item>;
        getItemByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Item[]>;
        getItemAttributeByName(nameOrId: string | number): Promise<PokeAPI.ItemAttribute>;
        getItemAttributeByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemAttribute[]>;
        getItemCategoryByName(nameOrId: string | number): Promise<PokeAPI.ItemCategory>;
        getItemCategoryByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemCategory[]>;
        getItemFlingEffectByName(nameOrId: string | number): Promise<PokeAPI.ItemFlingEffect>;
        getItemFlingEffectByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemFlingEffect[]>;
        getItemPocketByName(nameOrId: string | number): Promise<PokeAPI.ItemPocket>;
        getItemPocketByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemPocket[]>;
        getMachineById(id: number): Promise<PokeAPI.Machine>;
        getMachineById(ids: number[]): Promise<PokeAPI.Machine[]>;
        getMoveByName(nameOrId: string | number): Promise<PokeAPI.Move>;
        getMoveByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Move[]>;
        getMoveAilmentByName(nameOrId: string | number): Promise<PokeAPI.MoveAilment>;
        getMoveAilmentByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveAilment[]>;
        getMoveBattleStyleByName(nameOrId: string | number): Promise<PokeAPI.MoveBattleStyle>;
        getMoveBattleStyleByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveBattleStyle[]>;
        getMoveCategoryByName(nameOrId: string | number): Promise<PokeAPI.MoveCategory>;
        getMoveCategoryByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveCategory[]>;
        getMoveDamageClassByName(nameOrId: string | number): Promise<PokeAPI.MoveDamageClass>;
        getMoveDamageClassByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveDamageClass[]>;
        getMoveLearnMethodByName(nameOrId: string | number): Promise<PokeAPI.MoveLearnMethod>;
        getMoveLearnMethodByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveLearnMethod[]>;
        getMoveTargetByName(nameOrId: string | number): Promise<PokeAPI.MoveTarget>;
        getMoveTargetByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveTarget[]>;
        getLocationByName(nameOrId: string | number): Promise<PokeAPI.Location>;
        getLocationByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Location[]>;
        getLocationAreaByName(nameOrId: string | number): Promise<PokeAPI.LocationArea>;
        getLocationAreaByName(nameOrIds: Array<string | number>): Promise<PokeAPI.LocationArea[]>;
        getPalParkAreaByName(nameOrId: string | number): Promise<PokeAPI.PalParkArea>;
        getPalParkAreaByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PalParkArea[]>;
        getRegionByName(nameOrId: string | number): Promise<PokeAPI.Region>;
        getRegionByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Region[]>;
        getAbilityByName(nameOrId: string | number): Promise<PokeAPI.Ability>;
        getAbilityByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Ability[]>;
        getCharacteristicById(id: number): Promise<PokeAPI.Characteristic>;
        getCharacteristicById(ids: number[]): Promise<PokeAPI.Characteristic[]>;
        getEggGroupByName(nameOrId: string | number): Promise<PokeAPI.EggGroup>;
        getEggGroupByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EggGroup[]>;
        getGenderByName(nameOrId: string | number): Promise<PokeAPI.Gender>;
        getGenderByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Gender[]>;
        getGrowthRateByName(nameOrId: string | number): Promise<PokeAPI.GrowthRate>;
        getGrowthRateByName(nameOrIds: Array<string | number>): Promise<PokeAPI.GrowthRate[]>;
        getNatureByName(nameOrId: string | number): Promise<PokeAPI.Nature>;
        getNatureByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Nature[]>;
        getPokeathlonStatByName(nameOrId: string | number): Promise<PokeAPI.PokeathlonStat>;
        getPokeathlonStatByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokeathlonStat[]>;
        getPokemonByName(nameOrId: string | number): Promise<PokeAPI.Pokemon>;
        getPokemonByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Pokemon[]>;
        getPokemonColorByName(nameOrId: string | number): Promise<PokeAPI.PokemonColor>;
        getPokemonColorByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonColor[]>;
        getPokemonFormByName(nameOrId: string | number): Promise<PokeAPI.PokemonForm>;
        getPokemonFormByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonForm[]>;
        getPokemonHabitatByName(nameOrId: string | number): Promise<PokeAPI.PokemonHabitat>;
        getPokemonHabitatByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonHabitat[]>;
        getPokemonShapeByName(nameOrId: string | number): Promise<PokeAPI.PokemonShape>;
        getPokemonShapeByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonShape[]>;
        getPokemonSpeciesByName(nameOrId: string | number): Promise<PokeAPI.PokemonSpecies>;
        getPokemonSpeciesByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonSpecies[]>;
        getStatByName(nameOrId: string | number): Promise<PokeAPI.Stat>;
        getStatByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Stat[]>;
        getTypeByName(nameOrId: string | number): Promise<PokeAPI.Type>;
        getTypeByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Type[]>;
        getLanguageByName(nameOrId: string | number): Promise<PokeAPI.Language>;
        getLanguageByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Language[]>;
        getEndpointsList(): PokeAPI.EndpointsList;
        getBerriesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getBerriesFirmnesssList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getBerriesFlavorsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getContestTypesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getContestEffectsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.APIResourceList>;
        getSuperContestEffectsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.APIResourceList>;
        getEncounterMethodsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getEncounterConditionsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getEncounterConditionValuesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getEvolutionChainsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.APIResourceList>;
        getEvolutionTriggersList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getGenerationsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokedexsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getVersionsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getVersionGroupsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getItemsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getItemAttributesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getItemCategoriesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getItemFlingEffectsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getItemPocketsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMachinesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.APIResourceList>;
        getMovesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMoveAilmentsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMoveBattleStylesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMoveCategoriesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMoveDamageClassesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMoveLearnMethodsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMoveTargetsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getLocationsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getLocationAreasList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPalParkAreasList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getRegionsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getAbilitiesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getCharacteristicsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.APIResourceList>;
        getEggGroupsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getGendersList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getGrowthRatesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getNaturesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokeathlonStatsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokemonsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokemonColorsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokemonFormsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokemonHabitatsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokemonShapesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokemonSpeciesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getStatsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getTypesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getLanguagesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
    }

    export = PokeAPI;
}
