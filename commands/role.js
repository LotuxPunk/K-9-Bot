module.exports = {
    name: 'role',
    usage:'<mod>, <modpack>, <server>, <stream>, <preview>',
    args: true,
    description: 'Roles',
	execute(msg, args) {
        const roleAdded = "Role added !";
        const roleDeleted = "Role deleted !";

        const idModpackRole = "509742553009225741";
        const idModRole = "518161633990803477";
        const idStreamRole = "509742314865033234";
        const idPreviewsRole = "608963694285553684";
        const idServerRole = "687066428779921421";

        let toggle = function toggleRole(member, roleID, msg){
            if(member.roles.cache.has(roleID)){
                member.roles.remove(roleID).catch(console.error).then(() => {
                    msg.reply(roleDeleted);
                });
            }
            else{
                member.roles.add(roleID).catch(console.error).then(() => {
                    msg.reply(roleAdded);
                });
            }    
        }
        
		switch (args[0]){
            case 'modpack':
                toggle(msg.member,idModpackRole, msg);
                break;
            case 'mod':
                toggle(msg.member,idModRole, msg);
                break;
            case 'stream':
                toggle(msg.member,idStreamRole, msg);
                break;
            case 'preview':
                toggle(msg.member,idPreviewsRole, msg);
                break;
            case 'server':
                toggle(msg.member,idServerRole, msg);
                break;
        }
    },
};