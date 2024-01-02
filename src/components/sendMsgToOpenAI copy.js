import OPENAI from 'openai';


const open = new OPENAI({apiKey: "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",dangerouslyAllowBrowser: true });



const sendMsgToOpenAI = async(message) => {
  const completion = await open.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content":message}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion);
  return (completion.choices[0].message.content);


}

export default sendMsgToOpenAI;
