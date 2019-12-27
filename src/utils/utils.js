export const RegexPatterns = {
    StandarDate: {
        name: "Date in format dd/mm/yyyy",
        regex: /^(0?[1-9]|[12][0-9]|3[01])([ /\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/,
        description:
            "Will match dates with dashes, slashes or with spaces (e.g. dd-mm-yyyy dd/mm/yyyy dd mm yyyy), and optional time separated by a space or a dash (e.g. dd-mm-yyyy-hh:mm:ss or dd/mm/yyyy hh:mm:ss).",
        tags: "date,time"
    },
    Time24hours: {
        name: "Time in 24-hour format",
        regex: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
        description: "Match times in 24 hour format",
        tags: "date,time"
    },
    ISODateTime: {
        name: "Date and time in ISO-8601 format",
        regex: /^(?![+-]?\d{4,5}-?(?:\d{2}|W\d{2})T)(?:|(\d{4}|[+-]\d{5})-?(?:|(0\d|1[0-2])(?:|-?([0-2]\d|3[0-1]))|([0-2]\d{2}|3[0-5]\d|36[0-6])|W([0-4]\d|5[0-3])(?:|-?([1-7])))(?:(?!\d)|T(?=\d)))(?:|([01]\d|2[0-4])(?:|:?([0-5]\d)(?:|:?([0-5]\d)(?:|\.(\d{3})))(?:|[zZ]|([+-](?:[01]\d|2[0-4]))(?:|:?([0-5]\d)))))$/,
        description:
            "Will match a valid date and times in the ISO-8601 format, excludes durations.",
        tags: "date,time"
    },
    HTMLtags: {
        name: "HTML tags",
        regex: /^<([a-z1-6]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)$/,
        description: "Match opening and closing HTML tags with content between",
        tags: "markup,xml,html"
    },
    Alphanumeric: {
        name: "alphanumeric",
        regex: /^[a-zA-Z0-9]+$/gi,
        description:
            "Allowing alphanumeric characters",
        tags: "alphanumeric,validation"
    },
    Username: {
        name: "Username",
        regex: /^[a-zA-Z0-9_-]{3,16}$/,
        description:
            "A string between 3 and 16 characters, allowing alphanumeric characters and hyphens and underscores",
        tags: "username,validation"
    },
    HexColorValue: {
        name: "Hex Color Value",
        regex: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        description: "RGB hex colors",
        tags: "hex,color"
    },
    URLSlug: {
        name: "URL Slug",
        regex: /^[a-z0-9-]+$/,
        description: "Match valid URL slugs",
        tags: "URL"
    },
    Email: {
        name: "Email",
        regex: /^.+@.+$/,
        description:
            "Verify that there is an @ symbol with something before it",
        tags: "email,validation"
    },
    SRCofimagetag: {
        name: "SRC of image tag",
        regex: /^<\s*img[^>]+src\s*=\s*(["'])(.*?)\1[^>]*>$/,
        description: "Match the src attribute of an HTML image tag",
        tags: "html,tag,image"
    },
    URL: {
        name: "URL",
        regex: /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        description: "Match URL with optional protocol",
        tags: "url,address,http"
    },
    IPv4Address: {
        name: "IPv4 Address",
        regex: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        description: "Match IP v4 addresses",
        tags: "tcpip,internet,address"
    },
    IPv6Address: {
        name: "IPv6 Address",
        regex: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
        description: "Match IP v6 addresses",
        tags: "tcpip,internet,address"
    },
    JWT: {
        name: "JWT",
        regex: /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/,
        description: "JSON Web Token (encoded)",
        tags: "www"
    },
    PositiveInteger: {
        name: "Positive Integer",
        regex: /^\d+$/,
        descriptions: "Match whole numbers above zero",
        tags: "number"
    },
    NegativeInteger: {
        name: "Negative Integer",
        regex: /^-\d+$/,
        description: "Match whole numbers below zero",
        tags: "number"
    },
    Integer: {
        name: "Integer",
        regex: /^-?\d+$/,
        description: "Match whole numbers, above or below zero",
        tags: "number"
    },
    PositiveNumber: {
        name: "Positive number",
        regex: /^\d*\.?\d+$/,
        description: "Match integers or floats that are positive",
        tags: "float"
    },
    NegativeNumber: {
        name: "Negative number",
        regex: /^-\d*\.?\d+$/,
        description: "Match integers or floats that are negative",
        tags: "float"
    },
    PositiveOrNegativeNumber: {
        name: "Positive or negative number",
        regex: /^-?\d*\.?\d+$/,
        description: "Match integers or floats that are positive or negative",
        tags: "float"
    },
    PhoneNumber: {
        name: "Phone number",
        regex: /^\+?(\d.*){3,}$/,
        description: "Match phone numbers at least 3 digits long",
        tags: "validation"
    },
    NewLine: {
        name: "New line",
        regex: /[\r\n]|$/,
        description: "Match new lines within text",
        tags: "text"
    },
    IDofYoutubeVideo: {
        name: "ID of Youtube video",
        regex: /https?:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#\!)v=)([\w-]{11}).*/gi,
        description: "Match the ID of a youtube video URL",
        tags: "video,youtube,url"
    },
    IDofYoutubeChannel: {
        name: "ID of Youtube Channel",
        regex: /https?:\/\/(www\.)?youtube.com\/channel\/UC([-_a-z0-9]{22})/i,
        description: "Match the ID of a youtube channel URL",
        tags: "channel,youtube,url"
    },
    CSScomment: {
        name: "CSS comment",
        regex: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//,
        description: "Match standard CSS comments",
        tags: "css,comment,code"
    },
    WordpressShortcodes: {
        name: "Wordpress shortcodes",
        regex: /^\[([a-z-_0-9]+)([^\[]+)*(?:\](.*)\[\/\1\]|\s+\/\])$/,
        description:
            "Matches opening and closing shortcode tags with content in-between them.",
        tags: "wordpress,shortcodes,markup"
    },
    USZipCode: {
        name: "U.S./Canadian ZIP/Postal Code",
        regex: /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,
        description: "Matches US ZIP, ZIP+4, and Canadian Postal Codes",
        tags: "address, postal, zip"
    },
    UKZipCode: {
        name: "UK Postal Code",
        regex: /^(([gG][iI][rR] {0,}0[aA]{2})|(([aA][sS][cC][nN]|[sS][tT][hH][lL]|[tT][dD][cC][uU]|[bB][bB][nN][dD]|[bB][iI][qQ][qQ]|[fF][iI][qQ][qQ]|[pP][cC][rR][nN]|[sS][iI][qQ][qQ]|[iT][kK][cC][aA]) {0,}1[zZ]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yxA-HK-XY]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/,
        description: "Matches all UK postcodes",
        tags: "address, postal, zip"
    },
    BRZipCode: {
        name: "Brazilian ZIP/Postal Code",
        regex: /^[0-9]{5}-[0-9]{3}$/,
        description: "Matches BR ZIP/Postal Code",
        tags: "address, postal, zip"
    },
    MorseCode: {
        name: "Morse Code",
        regex: /^[.-]{1,5}(?:[ \t]+[.-]{1,5})*(?:[ \t]+[.-]{1,5}(?:[ \t]+[.-]{1,5})*)*$/,
        description: "Matches valid Morse Code",
        tags: "morse, code"
    },
    ImageShortcode: {
        name: "Image shortcode",
        regex: /\[img\](.*?)\[\/img\]/,
        description:
            "Matches the content in between [img][/img]. Useful for making dynamic WYSIWYG editors",
        tags: "img, shortcode, wysiwyg"
    },
    BrainfuckCode: {
        name: "Brainfuck Code",
        regex: /^[+-<>.,\[\] \t\n\r]+$/,
        description: "Matches valid code for a brainfuck program.",
        tags: "brainfuck, code"
    },
    Password:{
        name: "Password",
        
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@*#!$%&])/,
        description: "The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict.",
        tags: "Password"
    }
};
