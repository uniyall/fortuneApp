import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "fortuneAppDB";

export const handler = async (event) => {
    const fortunes = [
            "May the winds of change bring forth blessings. Your struggles will fade away, paving the path for new opportunities. Stay true to your values, and the universe will conspire to grant you enduring prosperity. However, heed caution against arrogance and greed, for they may darken this bright fortune.",
            "Fortune smiles upon your endeavors. Challenges will dissipate, making way for success and fulfillment. Embrace sincerity and empathy towards others, nurturing these virtues will uphold this prosperous phase. Yet, be wary of indulgence and self-centeredness, lest they tarnish this auspicious time.",
            "Serendipity surrounds you. Adversities dissolve, allowing happiness to permeate your life. Uphold honesty and kindness in your dealings, nurturing these qualities shall ensure the continuity of this favorable fortune. Remember, vanity and excess may eclipse this golden era.",
            "A wave of positivity approaches. Difficulties will fade, unveiling a period of joy and contentment. Preserve your integrity and extend compassion, sustaining these virtues shall prolong this fortunate time. However, beware of pride and desires that may eclipse this brightness.",
            "Harmony awaits on the horizon. Obstacles fade away, ushering in a phase of abundance and joy. Maintain humility and generosity, fostering these traits will extend this prosperous phase. Yet, beware of arrogance and indulgence, for they may disrupt this harmony."
        ];
    
        // Randomly select a fortune
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const selectedFortune = fortunes[randomIndex];


        const currTime = new Date().toISOString();

        await dynamo.send(
            new PutCommand({
              TableName: tableName,
              Item: {
                ID : "1",
                requestTime: currTime
              },
            })
          );
    
        // Create a JSON response
        const response = {
            statusCode: 200,
            body: { fortune: selectedFortune }
        };
        return response;
    };