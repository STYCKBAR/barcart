-- psql -d postgres://tvvvvphx:b-2own748-zTh8ROuvVcRT4svGlaoo_P@lallah.db.elephantsql.com/tvvvvphx -f drinks_postgres_create.sql
DROP TABLE public.ingredients;
DROP TABLE public.drinks;
DROP TABLE public.ingredients_in_drinks;

CREATE TABLE public.ingredients (
	"_id" serial NOT NULL PRIMARY KEY,
  "ingredient" varchar NOT NULL,
  "family" varchar NOT NULL,
  "in_stock" decimal(5,2) NOT NULL,
  "units" varchar NOT NULL
);

CREATE TABLE public.drinks (
	"_id" serial NOT NULL PRIMARY KEY,
  "drink" varchar NOT NULL,
  "flavor" varchar NOT NULL,
  "glassware" varchar NOT NULL
);

CREATE TABLE public.ingredients_in_drinks (
  "_id" serial NOT NULL PRIMARY KEY,
  "drink_id" serial NOT NULL,
  "ingredient_id" serial NOT NULL,
  "quantity" decimal(5,2) NOT NULL
);

INSERT INTO ingredients (id, ingredient_name) VALUES (1, 'gin');
INSERT INTO ingredients (id, ingredient_name) VALUES (2, 'brandy');
INSERT INTO ingredients (id, ingredient_name) VALUES (3, 'whiskey');
INSERT INTO ingredients (id, ingredient_name) VALUES (4, 'rum');
INSERT INTO ingredients (id, ingredient_name) VALUES (5, 'tequila');
INSERT INTO ingredients (id, ingredient_name) VALUES (6, 'vodka');
INSERT INTO ingredients (id, ingredient_name) VALUES (7, 'absinthe');
INSERT INTO ingredients (id, ingredient_name) VALUES (8, 'ginger beer');
INSERT INTO ingredients (id, ingredient_name) VALUES (9, 'prosecco');
INSERT INTO ingredients (id, ingredient_name) VALUES (10, 'lime juice');
INSERT INTO ingredients (id, ingredient_name) VALUES (11, 'lemon juice');
INSERT INTO ingredients (id, ingredient_name) VALUES (12, 'cranberry juice');
INSERT INTO ingredients (id, ingredient_name) VALUES (13, 'tomato juice');
INSERT INTO ingredients (id, ingredient_name) VALUES (14, 'club soda');
INSERT INTO ingredients (id, ingredient_name) VALUES (15, 'lime slice');
INSERT INTO ingredients (id, ingredient_name) VALUES (16, 'lemon slice');
INSERT INTO ingredients (id, ingredient_name) VALUES (17, 'orange slice');
INSERT INTO ingredients (id, ingredient_name) VALUES (18, 'horseradish');
INSERT INTO ingredients (id, ingredient_name) VALUES (19, 'celery stalk');
INSERT INTO ingredients (id, ingredient_name) VALUES (20, 'green olive');
INSERT INTO ingredients (id, ingredient_name) VALUES (21, 'hot sauce');
INSERT INTO ingredients (id, ingredient_name) VALUES (22, 'worcestershire sauce');
INSERT INTO ingredients (id, ingredient_name) VALUES (23, 'salt');
INSERT INTO ingredients (id, ingredient_name) VALUES (24, 'black peppr');
INSERT INTO ingredients (id, ingredient_name) VALUES (25, 'orange juice');
INSERT INTO ingredients (id, ingredient_name) VALUES (26, 'bitters');
INSERT INTO ingredients (id, ingredient_name) VALUES (27, 'grapefruit juice');
INSERT INTO ingredients (id, ingredient_name) VALUES (28, 'mezcal');
INSERT INTO ingredients (id, ingredient_name) VALUES (29, 'vermouth');
INSERT INTO ingredients (id, ingredient_name) VALUES (30, 'cointreau');
INSERT INTO ingredients (id, ingredient_name) VALUES (31, 'bourbon');
INSERT INTO ingredients (id, ingredient_name) VALUES (32, 'sugar cube');
INSERT INTO ingredients (id, ingredient_name) VALUES (33, 'water');
INSERT INTO ingredients (id, ingredient_name) VALUES (34, 'egg white');
INSERT INTO ingredients (id, ingredient_name) VALUES (35, 'gomme syrup');
INSERT INTO ingredients (id, ingredient_name) VALUES (36, 'fresh cream');
INSERT INTO ingredients (id, ingredient_name) VALUES (37, 'coffee liqueur');
INSERT INTO ingredients (id, ingredient_name) VALUES (38, 'white rum');
INSERT INTO ingredients (id, ingredient_name) VALUES (39, 'simple syrup');

INSERT INTO sessions (cookie_id, user_id, created_at) VALUES ()


INSERT INTO recipes (recipe_id, recipe_name, description, directions) VALUES (1, 'Bloody Mary', 'The Bloody Mary is a cocktail consisting of a base of tomato juice and vodka. It is then seasoned with savory, usually a hot spicey ingredient, and lemon juice', 'Pour some celery salt onto a small plate. Rub the juicy side of the lemon or lime wedge along the lip of a pint glass. Roll the outer edge of the glass in celery salt until fully coated, then fill the glass with ice and set aside. Squeeze the lemon and lime wedges into a shaker and drop them in. Add the vodka, tomato juice, horseradish, Tabasco, Worcestershire, black pepper, paprika, plus a pinch of celery salt along with ice and shake gently. Strain into the prepared glass. Garnish with parsley sprig, 2 speared green olives, a lime wedge and a celery stalk (optional)');
INSERT INTO recipes (recipe_id, recipe_name, description, directions) VALUES (2, 'Martini', 'The martini is a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist. Over the years, the martini has become one of the best-known mixed alcoholic beverages.', 'Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.');
INSERT INTO recipes (recipe_id, recipe_name, description, directions) VALUES (3, 'Margarita', 'A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice.', 'Rub the rim of the glass with the lime slice to make the salt stick to it. Shake the other ingredients with ice, then carefully pour into the glass (taking care not to dislodge any salt). Garnish and serve over ice.');
INSERT INTO recipes (recipe_id, recipe_name, description, directions) VALUES (4, 'Old Fashioned', 'The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey, and garnishing with orange slice or zest and a cocktail cherry.', 'Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with orange slice, and a cocktail cherry.');
INSERT INTO recipes (recipe_id, recipe_name, description, directions) VALUES (5, 'Mimosa', 'This way, you taste crisp, bubbly wine and sweet citrus in equal measure. A juice-heavy Mimosa tastes more like fruit punch than a cocktail. Add too much sparkling wine, and that is all you will taste.', 'Fill eight champagne flutes half full with chilled sparkling wine. Top with orange juice. If you are using it, add 1 tablespoon of Grand Marnier to each glass.');
INSERT INTO recipes (recipe_id, recipe_name, description, directions) VALUES (6, 'Moscow Mule', 'A Moscow mule is a cocktail made with vodka, spicy ginger beer and lime juice, garnished with a slice or wedge of lime. The drink is a type of buck and is sometimes called a vodka buck. Moscow mule.', 'Pour vodka and lime juice into a mug; add ice cubes and ginger beer. Stir to combine, drop a lime wedge into the mug for garnish.');
INSERT INTO recipes (recipe_id, recipe_name, description, directions) VALUES (7, 'Cosmopolitan', 'A cosmopolitan, or informally a cosmo, is a cocktail made with vodka, triple sec, cranberry juice, and freshly squeezed or sweetened lime juice.', 'Combine vodka, cranberry juice, lime juice, and triple sec in a cocktail shaker. Fill shaker with ice, cover, and shake vigorously until outside of shaker is very cold, about 20 seconds. Strain cocktail through a Hawthorne strainer or a slotted spoon into a martini glass. Garnish with orange twist.');
INSERT INTO recipes (recipe_id, recipe_name, description, directions) VALUES (8, 'Whiskey Sour', 'A well-executed Whiskey Sour has the perfect balance of sweet and sour and highlights the wonderful flavors of good whiskey. It has a silky texture so it goes down easy. If that is not how you would describe a Whiskey Sour then you must be making it wrong.', 'Add bourbon, lemon juice, simple syrup and egg white to a shaker, dry-shake for 30 seconds without ice. Add ice and shake again until well-chilled, strain into a coupe glass. Garnish with 3 or 4 drops of Angostura bitters.');
INSERT INTO recipes (recipe_id, recipe_name, description, directions) VALUES (9, 'White Russian', ' A cocktail consisting of coffee liqueur, vodka, and milk.', 'Add 2 ounces vodka and 1 ounce coffee liqueur to a glass. Add ice, then 1 ounce of heavy cream.
Stir gently to get the swirl effect. Stir a White Russian vigorously until color resembles  a solid beige drink. Stir it gently just a few times, and the cream will swirl into the vodka and Kahlua in a beautiful pattern. It looks much more impressive!');
INSERT INTO recipes (recipe_id, recipe_name, description, directions) VALUES (10, 'Daiquiri', 'a cocktail of rum, lemon or lime juice, and sugar, often with the addition of fruit and ice and mixed in an electric blender: a frozen banana daiquiri.', 'Place the 2 cups of crushed ice into a cocktail shaker. Pour the rum, lime juice, and simple syrup over the ice, cover, and shake well. Remove the ice from your serving glass and strain the drink into it. Serve immediately.');


INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (1, 1, 6, 1.5);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (2, 1, 11, 0.5);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (3, 1, 13, 3);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (4, 1, 24, 1);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (5, 1, 21, 1);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (6, 1, 23, 1);

INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (7, 2, 1, 3);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (8, 2, 29, 0.5);

INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (9, 3, 4, 2);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (10, 3, 10, 1);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (11, 3, 30, 1);

INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (12, 4, 31, 1.5);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (13, 4, 32, 1);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (14, 4, 33, 0.25);

INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (15, 5, 9, 2.5);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (16, 5, 25, 2.5);

INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (17, 6, 6, 1.5);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (18, 6, 10, 0.25);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (19, 6, 8, 4);

INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (20, 7, 6, 1.5);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (21, 7, 12, 1);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (22, 7, 30, 0.5);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (23, 7, 10, 0.5);

INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (24, 8, 31, 1.5);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (25, 8, 34, 1);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (26, 8, 10, 1);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (27, 8, 35, 0.5);

INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (28, 9, 6, 1.66);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (29, 9, 36, 1);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (30, 9, 37, 0.66);

INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (31, 10, 38, 1.5);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (32, 10, 10, 1);
INSERT INTO recipe_ing (id, recipe_id, ing_id, rec_quantity) VALUES (33, 10, 39, 0.5);






