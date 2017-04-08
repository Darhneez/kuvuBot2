const discord = require('discord.js');
const config = require('../config.js');
const lang = require('../lang.js');

var help = {};

help.send = function (message) {
    const embed = new discord.RichEmbed()
        .setTitle(config.settings.bot_name)
        .setColor(config.settings.color.default)
        .setFooter(config.settings.footer)
        .setThumbnail(config.settings.bot_thumbnail)
        .setURL(config.settings.website)
        .addField('ℹ️  ' + lang.pl_PL.commands.help.commands,
            '[' + lang.pl_PL.aliases.help + '](javascript:;) - ' + lang.pl_PL.commands.help.help + '\n' +
            '[' + lang.pl_PL.aliases.ping + '](javascript:;) - ' + lang.pl_PL.commands.help.ping + '\n' +
            '[' + lang.pl_PL.aliases.text + '](javascript:;) <' + lang.pl_PL.commands.help.arguments.text + '> - ' + lang.pl_PL.commands.help.text + '\n' +
            '[' + lang.pl_PL.aliases.rawtext + '](javascript:;) <' + lang.pl_PL.commands.help.arguments.text + '> - ' + lang.pl_PL.commands.help.rawtext + '\n' +
            '[' + lang.pl_PL.aliases.avatar + '](javascript:;) [' + lang.pl_PL.commands.help.arguments.mention + '] - ' + lang.pl_PL.commands.help.avatar + '\n' +
            '[' + lang.pl_PL.aliases.isillegal + '](javascript:;) <' + lang.pl_PL.commands.help.arguments.text + '> - ' + lang.pl_PL.commands.help.isillegal + '\n' +
            '[' + lang.pl_PL.aliases.servers + '](javascript:;) - ' + (lang.pl_PL.commands.help.isillegal).replace('{0}', config.settings.bot_name) + '\n' +
            '[' + lang.pl_PL.aliases.react + '](javascript:;) <' + lang.pl_PL.commands.help.arguments.text + '> - ' + lang.pl_PL.commands.help.react + '\n' +
            '[' + lang.pl_PL.aliases.clever + '](javascript:;) <' + lang.pl_PL.commands.help.arguments.msg + '> - ' + lang.pl_PL.commands.help.cleverbot + '\n' +
            '[' + lang.pl_PL.aliases.cat + '](javascript:;) - ' + lang.pl_PL.commands.help.cat + '\n' +
            '[' + lang.pl_PL.aliases.status + '](javascript:;) <mojang/ip> - ' + lang.pl_PL.commands.help.status + '')
        .addField('🔗  ' + lang.pl_PL.commands.help.urls, 'WWW: [' + (config.settings.website).replace('http://', '').replace('https://', '') + '](' + config.settings.website + ')\n' +
            'GitHub: ' + config.settings.bot_github + '\n\n' +
            '[' + lang.pl_PL.invite_bot + '](' + config.settings.bot_invite_url + ')')
    message.author.sendEmbed(embed);
    message.reply(lang.pl_PL.commands.help.list_sent);
}
module.exports = help;