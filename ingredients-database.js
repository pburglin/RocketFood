/**
 * RocketFood - Ingredients Database
 * 
 * This database categorizes food ingredients into three categories:
 * - GREEN: Generally recognized as safe and natural ingredients
 * - YELLOW: Potentially concerning ingredients or misleading terms
 * - RED: Harmful, toxic, or highly processed ingredients
 */

const INGREDIENTS_DATABASE = {
    // GREEN category - Generally safe and natural ingredients
    green: {
        "organic": {
            description: "Grown without synthetic pesticides or fertilizers",
            alternatives: []
        },
        "whole grain": {
            description: "Contains all parts of the grain including the bran, germ, and endosperm",
            alternatives: []
        },
        "sprouted": {
            description: "Seeds that have been germinated, increasing nutritional value and digestibility",
            alternatives: []
        },
        "raw": {
            description: "Unprocessed and uncooked, retaining natural enzymes and nutrients",
            alternatives: []
        },
        "honey": {
            description: "Natural sweetener produced by bees",
            alternatives: []
        },
        "maple syrup": {
            description: "Natural sweetener made from the sap of maple trees",
            alternatives: []
        },
        "olive oil": {
            description: "Oil extracted from olives, rich in monounsaturated fats",
            alternatives: []
        },
        "coconut oil": {
            description: "Oil extracted from coconuts, contains medium-chain triglycerides",
            alternatives: []
        },
        "sea salt": {
            description: "Salt produced from the evaporation of seawater, contains trace minerals",
            alternatives: []
        },
        "apple cider vinegar": {
            description: "Fermented apple juice, contains beneficial bacteria and enzymes",
            alternatives: []
        },
        "niacin": {
            description: "Niacin, also known as Vitamin B3, is essential for converting food into energy and maintaining healthy skin, nerves, and digestion, making it generally beneficial when consumed in appropriate amounts",
            alternatives: []
        },
        "thiamin mononitrate": {
            description: "Thiamin mononitrate, a synthetic form of Vitamin B1, is essential for energy metabolism and maintaining healthy nerve and heart function, making it generally beneficial when consumed in appropriate amounts",
            alternatives: []
        },
        "riboflavin": {
            description: "Riboflavin, also known as Vitamin B2, is essential for energy production, cellular function, and maintaining healthy skin and vision, making it generally beneficial when consumed in appropriate amounts",
            alternatives: []
        },
        "folic acid": {
            description: "Folic acid, a synthetic form of Vitamin B9, is essential for DNA synthesis, cell growth, and preventing birth defects, making it generally beneficial when consumed in appropriate amounts",
            alternatives: []
        },
        "cheese cultures": {
            description: "Cheese cultures, which are specific bacteria strains used in cheesemaking, help develop the flavor and texture of cheese and can provide probiotics that support gut health when consumed in moderation",
            alternatives: []
        },
        "enzymes": {
            description: "Enzymes used in food production, such as those in cheese-making or bread baking, help with digestion and nutrient absorption, and are generally safe and beneficial when used in appropriate amounts",
            alternatives: []
        },
        "milk": {
            description: "Milk is a good source of essential nutrients like calcium, vitamin D, and protein, making it generally beneficial for bone health and overall nutrition when consumed in moderation",
            alternatives: []
        }
    },

    // YELLOW category - Potentially concerning ingredients or misleading terms
    yellow: {
        "natural flavors": {
            description: "Can include a wide range of processed additives derived from natural sources but heavily processed",
            alternatives: ["specific named flavors", "spices", "herbs"]
        },
        "wheat flour": {
            description: "Processed flour that may be stripped of nutrients, not the same as whole grain wheat flour",
            alternatives: ["whole grain wheat flour", "sprouted wheat flour"]
        },
        "enriched flour": {
            description: "Refined flour with some nutrients added back in, but still lacking many original nutrients",
            alternatives: ["whole grain flour", "almond flour", "coconut flour"]
        },
        "brown sugar": {
            description: "White sugar with molasses added for color and flavor, not significantly healthier than white sugar",
            alternatives: ["coconut sugar", "date sugar", "maple syrup"]
        },
        "evaporated cane juice": {
            description: "Another name for sugar, attempting to sound healthier",
            alternatives: ["honey", "maple syrup", "date sugar"]
        },
        "fruit juice concentrate": {
            description: "Concentrated fruit juice used as a sweetener, often with fiber and nutrients removed",
            alternatives: ["whole fruit", "fruit puree"]
        },
        "modified food starch": {
            description: "Starch that has been chemically altered to change its properties",
            alternatives: ["tapioca starch", "arrowroot powder"]
        },
        "soy protein isolate": {
            description: "Highly processed soy product that may contain residues from processing chemicals",
            alternatives: ["whole soybeans", "tempeh", "minimally processed tofu"]
        },
        "whey protein concentrate": {
            description: "Processed dairy product that may contain hormones if not from organic sources",
            alternatives: ["organic whey protein", "plant-based proteins"]
        },
        "maltodextrin": {
            description: "Highly processed carbohydrate used as a thickener or filler, can spike blood sugar",
            alternatives: ["tapioca starch", "arrowroot powder"]
        },
        "ferrous sulfate": {
            description: "Ferrous sulfate is generally safe when used as an iron supplement to treat iron deficiency, but it can cause side effects like stomach pain, constipation, and nausea",
            alternatives: []
        },
        "vegetable oil": {
            description: "While vegetable oil can be a healthy source of fats, excessive consumption, especially of oils high in omega-6 fatty acids, can lead to health issues like inflammation and heart disease",
            alternatives: []
        },
        "canola oil": {
            description: "Canola oil is low in saturated fat and contains beneficial omega-3 fatty acids, but its high level of processing and potential presence of trans fats can raise health concerns",
            alternatives: []
        },
        "cheddar cheese": {
            description: "Cheddar cheese is rich in calcium and protein, but its high saturated fat and sodium content can pose health risks if consumed in excess",
            alternatives: []
        },
        "enriched cornmeal": {
            description: "Enriched cornmeal provides essential vitamins and minerals, but the synthetic nutrients added during enrichment may not be as beneficial as those found in whole foods",
            alternatives: []
        },
        "corn meal": {
            description: "Cornmeal is a good source of carbohydrates and provides some essential nutrients, but it lacks the fiber and nutrient density of whole grains",
            alternatives: []
        },
        "cheese seasoning": {
            description: "Cheese seasoning can enhance flavor, but it often contains high levels of sodium and artificial additives, which can pose health risks if consumed in excess",
            alternatives: []
        },
        "sunflower oil": {
            description: "Sunflower oil is rich in healthy fats like monounsaturated and polyunsaturated fats, but its high omega-6 content can contribute to inflammation if consumed in excess",
            alternatives: []
        },
        "made from corn": {
            description: "Corn-based ingredients can provide essential nutrients like fiber, vitamins, and antioxidants, but their health benefits vary depending on the level of processing and added ingredients",
            alternatives: []
        }
    },

    // RED category - Harmful, toxic, or highly processed ingredients
    red: {
        "high fructose corn syrup": {
            description: "Highly processed sweetener linked to obesity, diabetes, and other health issues",
            alternatives: ["honey", "maple syrup", "coconut sugar"]
        },
        "partially hydrogenated oils": {
            description: "Contains trans fats linked to heart disease and other health problems",
            alternatives: ["olive oil", "avocado oil", "coconut oil"]
        },
        "monosodium glutamate": {
            description: "Flavor enhancer that may cause adverse reactions in some people",
            alternatives: ["sea salt", "herbs", "spices"]
        },
        "aspartame": {
            description: "Artificial sweetener linked to numerous health concerns",
            alternatives: ["stevia", "monk fruit extract", "erythritol"]
        },
        "sodium nitrite": {
            description: "Preservative used in processed meats linked to cancer risk",
            alternatives: ["celery powder (natural nitrates)", "salt-cured meats without additives"]
        },
        "butylated hydroxyanisole": {
            description: "Synthetic antioxidant preservative (BHA) linked to cancer risk",
            alternatives: ["vitamin E (tocopherols)", "rosemary extract"]
        },
        "butylated hydroxytoluene": {
            description: "Synthetic antioxidant preservative (BHT) linked to cancer risk",
            alternatives: ["vitamin E (tocopherols)", "rosemary extract"]
        },
        "propyl gallate": {
            description: "Synthetic antioxidant preservative linked to cancer risk",
            alternatives: ["vitamin E (tocopherols)", "rosemary extract"]
        },
        "potassium bromate": {
            description: "Flour additive linked to cancer, banned in many countries but not in the US",
            alternatives: ["unbromated flour"]
        },
        "azodicarbonamide": {
            description: "Flour bleaching agent and dough conditioner linked to respiratory issues",
            alternatives: ["unbleached flour"]
        },
        "carmine": {
            description: "Red food coloring made from crushed cochineal beetles, may cause allergic reactions",
            alternatives: ["beet juice", "paprika", "berry juices"]
        },
        "yeast extract": {
            description: "Often used to hide MSG (monosodium glutamate), a chemical taste enhancer",
            alternatives: ["nutritional yeast", "herbs", "spices"]
        },
        "artificial colors": {
            description: "Synthetic dyes linked to behavioral problems and other health issues",
            alternatives: ["natural food colorings from vegetables, fruits, and spices"]
        },
        "artificial flavors": {
            description: "Synthetic chemicals designed to mimic natural flavors",
            alternatives: ["real food ingredients", "herbs", "spices"]
        },
        "sodium benzoate": {
            description: "Preservative that can form benzene (a carcinogen) when combined with vitamin C",
            alternatives: ["citric acid", "vitamin E"]
        }
    },

    // Misleading product names and their explanations
    misleadingProducts: {
        "guacamole dip": {
            description: "May contain little to no actual avocado, instead using hydrogenated oils and artificial colors",
            realIngredients: "Should contain primarily avocados, lime juice, salt, and spices"
        },
        "maple syrup": {
            description: "Products labeled 'maple-flavored syrup' often contain no real maple syrup, just corn syrup and artificial flavors",
            realIngredients: "Real maple syrup should have only one ingredient: maple syrup"
        },
        "blueberry": {
            description: "Products advertising blueberries may contain 'blueberry bits' made from sugar, oil, and blue dye",
            realIngredients: "Should contain actual blueberries"
        },
        "whole grain": {
            description: "Products may advertise 'made with whole grains' but contain mostly refined flour",
            realIngredients: "Whole grain products should list a whole grain as the first ingredient"
        },
        "fruit juice": {
            description: "May contain minimal actual fruit juice, with the rest being water, sugar, and flavors",
            realIngredients: "100% fruit juice should contain only fruit juice, not added sugars"
        }
    },

    // Tips for reading ingredient labels
    tips: [
        "The first 3 ingredients matter most - they make up the majority of the product.",
        "Long, chemical-sounding ingredients often indicate highly processed foods.",
        "Ingredients at the end of the list are present in very small amounts, even if they sound healthy.",
        "Organic certification helps avoid pesticides and other contaminants not listed on labels.",
        "Look for 'sprouted' or 'raw' ingredients for higher nutritional value.",
        "'Wheat flour' is not the same as 'whole grain wheat flour' - don't be fooled!",
        "Brown products aren't necessarily healthier (e.g., brown sugar vs. white sugar).",
        "Watch out for deceptively small serving sizes that mask high calories, sugar, or fat."
    ]
};

// Helper function to search the database for an ingredient
function findIngredient(ingredientName) {
    // Convert to lowercase for case-insensitive matching
    const searchTerm = ingredientName.toLowerCase().trim();
    
    // Check green ingredients
    for (const [name, data] of Object.entries(INGREDIENTS_DATABASE.green)) {
        if (searchTerm.includes(name) || name.includes(searchTerm)) {
            return { category: 'green', name, data };
        }
    }
    
    // Check yellow ingredients
    for (const [name, data] of Object.entries(INGREDIENTS_DATABASE.yellow)) {
        if (searchTerm.includes(name) || name.includes(searchTerm)) {
            return { category: 'yellow', name, data };
        }
    }
    
    // Check red ingredients
    for (const [name, data] of Object.entries(INGREDIENTS_DATABASE.red)) {
        if (searchTerm.includes(name) || name.includes(searchTerm)) {
            return { category: 'red', name, data };
        }
    }
    
    // Check misleading products
    for (const [name, data] of Object.entries(INGREDIENTS_DATABASE.misleadingProducts)) {
        if (searchTerm.includes(name) || name.includes(searchTerm)) {
            return { category: 'misleading', name, data };
        }
    }
    
    // If no match found
    return null;
}

// Helper function to analyze a list of ingredients
function analyzeIngredients(ingredientsList) {
    // First split the ingredients string by commas
    let ingredients = ingredientsList
        .split(',')
        .map(item => item.trim())
        .filter(item => item.length > 0);
    
    // Define separators for splitting ingredients
    // Characters that should always split
    const charSeparators = ['(', '[', ']', ')', ':', '.'];
    
    // Process each ingredient to split at separators
    let processedIngredients = [];
    ingredients.forEach(ingredient => {
        // First split by character separators
        let parts = [ingredient];
        
        // Process each character separator
        charSeparators.forEach(separator => {
            let newParts = [];
            parts.forEach(part => {
                // Split by current separator and add all parts
                const splitParts = part.split(separator);
                for (let i = 0; i < splitParts.length; i++) {
                    if (splitParts[i].trim().length > 0) {
                        newParts.push(splitParts[i].trim());
                    }
                }
            });
            parts = newParts;
        });
        
        // Now process word separators with more care
        let wordProcessedParts = [];
        parts.forEach(part => {
            // Check for word separators with spaces
            let processed = part;
            
            // Handle " AND " (with spaces) - case insensitive
            //processed = processed.split(/ and /i).join('|');
            
            // Handle " OR " (with spaces) - case insensitive
            processed = processed.split(/ or /i).join('|');
            
            // Handle " AND/OR " (with spaces) - case insensitive
            processed = processed.split(/ and\/or /i).join('|');
            
            // Handle "AND/OR" (without spaces) - case insensitive
            processed = processed.replace(/and\/or/i, '|');
            
            // Now handle "AND" and "OR" as whole words (not parts of other words)
            // This is a simple approach - for a more robust solution, use regex with word boundaries
            
            // Handle "AND" as a whole word - case insensitive
            //processed = processed.replace(/\band\b/gi, '|');
            
            // Handle "OR" as a whole word - case insensitive
            processed = processed.replace(/\bor\b/gi, '|');
            
            // Split by the pipe character we inserted
            const finalParts = processed.split('|');
            for (let i = 0; i < finalParts.length; i++) {
                if (finalParts[i].trim().length > 0) {
                    wordProcessedParts.push(finalParts[i].trim());
                }
            }
        });
        
        // Add all processed parts to the final ingredients list
        processedIngredients = [...processedIngredients, ...wordProcessedParts];
    });
    
    // Use the processed ingredients for analysis
    ingredients = processedIngredients.filter(item => item.length > 0);
    
    const results = {
        ingredients: [],
        overallScore: 'green', // Default to green, will be downgraded if necessary
        topThreeAnalysis: null,
        tips: []
    };
    
    // Analyze each ingredient
    ingredients.forEach((ingredient, index) => {
        const match = findIngredient(ingredient);
        
        if (match) {
            results.ingredients.push({
                original: ingredient,
                matched: match.name,
                category: match.category,
                description: match.data.description,
                alternatives: match.data.alternatives || []
            });
            
            // Downgrade overall score if necessary
            if (match.category === 'yellow' && results.overallScore === 'green') {
                results.overallScore = 'yellow';
            } else if (match.category === 'red') {
                results.overallScore = 'red';
            }
        } else {
            // Unknown ingredient
            results.ingredients.push({
                original: ingredient,
                matched: null,
                category: 'unknown',
                description: "Unknown ingredient - consider researching this further",
                alternatives: []
            });
        }
    });
    
    // Analyze top three ingredients
    if (ingredients.length >= 3) {
        const topThree = ingredients.slice(0, 3);
        const topThreeMatches = topThree.map(ing => findIngredient(ing));
        
        // Count categories in top three
        const redCount = topThreeMatches.filter(m => m && m.category === 'red').length;
        const yellowCount = topThreeMatches.filter(m => m && m.category === 'yellow').length;
        
        if (redCount > 0) {
            results.tips.push("One or more of the top three ingredients are potentially harmful. Since these make up the majority of the product, consider avoiding this item.");
        } else if (yellowCount > 0) {
            results.tips.push("Some of the top three ingredients may be concerning. Since these make up the majority of the product, look for alternatives with better main ingredients.");
        }
    }
    
    // Add general tips based on analysis
    if (results.ingredients.some(i => i.category === 'unknown')) {
        results.tips.push("This product contains ingredients that aren't in our database. Research unfamiliar ingredients before consuming.");
    }
    
    if (results.ingredients.length > 10) {
        results.tips.push("This product has a long ingredient list, suggesting it's highly processed. Consider choosing items with fewer, more recognizable ingredients.");
    }
    
    // Add a random general tip
    const randomTip = INGREDIENTS_DATABASE.tips[Math.floor(Math.random() * INGREDIENTS_DATABASE.tips.length)];
    results.tips.push(randomTip);
    
    return results;
}
