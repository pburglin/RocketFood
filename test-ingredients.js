/**
 * Test script for ingredient parsing improvements
 */

// Import the analyzeIngredients function
// Since it's not exported as a module, we'll redefine it here for testing
function findIngredient(ingredientName) {
    // Simplified version for testing
    console.log(`Searching for: "${ingredientName}"`);
    return null; // For testing, we just want to see the parsed ingredients
}

function analyzeIngredients(ingredientsList) {
    // First split the ingredients string by commas
    let ingredients = ingredientsList
        .split(',')
        .map(item => item.trim())
        .filter(item => item.length > 0);
    
    console.log("After comma splitting:", ingredients);
    
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
            
            // Handle " AND " (with spaces)
            processed = processed.split(' AND ').join('|');
            
            // Handle " OR " (with spaces)
            processed = processed.split(' OR ').join('|');
            
            // Handle " AND/OR " (with spaces)
            processed = processed.split(' AND/OR ').join('|');
            
            // Handle "AND/OR" (without spaces)
            processed = processed.split('AND/OR').join('|');
            
            // Now handle "AND" and "OR" as whole words (not parts of other words)
            // This is a simple approach - for a more robust solution, use regex with word boundaries
            
            // Handle "AND" as a whole word
            processed = processed.replace(/\bAND\b/g, '|');
            
            // Handle "OR" as a whole word
            processed = processed.replace(/\bOR\b/g, '|');
            
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
    
    console.log("After separator splitting:", ingredients);
    
    // For testing, we'll just return the processed ingredients
    return {
        ingredients: ingredients.map(ing => ({
            original: ing,
            category: 'test'
        }))
    };
}

// Test with problematic examples
console.log("=== Testing Problematic Ingredient Parsing ===");

const testCases = [
    "ENRICHED CORN MEAL (CORN MEAL, FERROUS SULFATE, NIACIN)",
    "VEGETABLE OIL (CORN, CANOLA, AND/OR SUNFLOWER OIL)",
    "CHEESE SEASONING (WHEY, CHEDDAR CHEESE)",
    "CONTAINS [WHEAT, MILK]",
    "SUGAR, CORNAND WHEAT FLOUR", // Testing "AND" without spaces
    "SALT, PEPPEROR SPICES", // Testing "OR" without spaces
    "WHEAT AND CORN", // Testing "AND" as a standalone word
    "SALT OR SPICES", // Testing "OR" as a standalone word
    "WHEAT AND CORN AND RICE", // Testing multiple "AND"s
    "SALT OR PEPPER OR SPICES" // Testing multiple "OR"s
];

testCases.forEach((testCase, index) => {
    console.log(`\n--- Test Case ${index + 1}: "${testCase}" ---`);
    const result = analyzeIngredients(testCase);
    console.log("Final parsed ingredients:", result.ingredients.map(i => i.original));
});
