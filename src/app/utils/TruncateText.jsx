export const truncateText = (text, maxLength = 40) => {
    console.log(text)
    return text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
