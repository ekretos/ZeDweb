import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldBan, Bot, Gavel, Bell, ScrollText, Lock, Terminal, Settings, AlertTriangle, Heart, MessageCircle } from 'lucide-react';

const docs = {
  antinuke: {
    title: 'Anti-Nuke Protection',
    icon: ShieldBan,
    description: 'Advanced protection system against malicious actions and server nuking attempts.',
    ogDescription: 'Learn how to protect your Discord server with Zero Degree\'s advanced Anti-Nuke system. Featuring real-time monitoring, instant threat detection, and automatic rollback of malicious changes.',
    sections: [
      {
        title: 'Overview',
        content: 'The Anti-Nuke system provides comprehensive protection against various types of attacks and unauthorized actions that could harm your server. It monitors and prevents mass actions like bans, channel deletions, and role modifications.'
      },
      {
        title: 'Features',
        content: [
          'Real-time monitoring of administrative actions',
          'Instant threat detection and response',
          'Automatic rollback of malicious changes',
          'Customizable protection thresholds',
          'Detailed logging of security events'
        ]
      },
      {
        title: 'Basic Commands',
        content: [
          '`/enable` - Enable the Anti-Nuke system',
          '`/disable` - Disable the Anti-Nuke system',
          '`/antinuke channel` - Set up logging channel for Anti-Nuke actions'
        ]
      },
      {
        title: 'Whitelist Management',
        content: 'The whitelist system allows you to manage trusted users who are exempt from anti-nuke restrictions. This is particularly useful for server administrators and trusted moderators who need to perform bulk actions without triggering the anti-nuke protection.\n\nUse either slash commands or prefix commands to manage the whitelist:'
      },
      {
        title: 'Whitelist Commands (Slash)',
        content: [
          '`/whitelist add` - Add users to whitelist',
          '`/whitelist remove` - Remove users from whitelist',
          '`/whitelist owner` - Add/Edit owners in whitelist',
          '`/whitelist show` - Display whitelist data',
          '`/whitelist action` - Configure antinuke actions for users'
        ]
      },
      {
        title: 'Whitelist Commands (Prefix)',
        content: [
          '`{p}whitelist add` - Add users to whitelist',
          '`{p}whitelist remove` - Remove users from whitelist',
          '`{p}whitelist owner` - Add/Edit owners in whitelist',
          '`{p}whitelist show` - Display whitelist data',
          '`{p}whitelist action` `action` - Configure antinuke actions for users'
        ]
      }
    ]
  },
  welcome: {
    title: 'Welcome System',
    icon: Heart,
    description: 'Comprehensive welcome system with interactive configuration, custom messages, embeds, and member greeting features.',
    ogDescription: 'Learn how to set up Zero Degree\'s Welcome System. Create beautiful welcome messages, customize greetings, configure auto-roles, and make new members feel at home in your Discord server.',
    sections: [
      {
        title: 'Overview',
        content: 'The Welcome System provides a complete interactive interface for configuring welcome messages when new members join your server. Features include text messages, rich embeds, auto-role assignment, DM greetings, and extensive variable support.'
      },
      {
        title: 'Features',
        content: [
          'Interactive button-based configuration interface',
          'Text and embed welcome messages with variables',
          'Automatic role assignment for new members',
          'Direct message welcome greetings',
          'Live preview and testing functionality',
          'Extensive variable system with 50+ placeholders',
          'Channel and permission validation',
          'Multi-language support'
        ]
      },
      {
        title: 'Main Command',
        content: [
          '`/welcome` - Opens the interactive welcome configuration panel',
          '**Required Permission:** Manage Server',
          '**Bot Permissions:** Send Messages, Embed Links in welcome channel'
        ]
      },
      {
        title: 'Interactive Configuration',
        content: 'The `/welcome` command opens an interactive panel with these options:\n\n**📍 Channel** - Set the welcome channel\n**🎭 Role** - Configure auto-role assignment\n**👁️ Test Preview** - Preview your welcome setup\n**📝 Text Message** - Set custom text message\n**🎨 Embed Message** - Configure rich embed\n**💬 DM** - Enable/disable direct messages\n**🧪 Test** - Send test welcome message\n**📋 Variables** - View all available variables\n**🚫 Disable** - Disable welcome system'
      },
      {
        title: 'Embed Editor',
        content: 'The embed editor allows you to customize:\n\n**📝 Title** - Main heading (max 256 characters)\n**📄 Description** - Main content (max 4096 characters)\n**🎨 Color** - Border color (hex codes, color names, RGB)\n**🖼️ Thumbnail** - Small image in top-right corner\n**📷 Image** - Large image at bottom\n**🗑️ Clear All** - Remove all embed properties\n\nSupports variables in all fields including image URLs.'
      },
      {
        title: 'Variable System',
        content: 'Over 50 variables available across 4 categories:\n\n**👤 Member Info:** `{mention}`, `{tag}`, `{displayName}`, `{nickname}`, `{userId}`, `{username}`\n**📊 Account & Join:** `{accountAge}`, `{accountAgeInDays}`, `{joinPosition}`, `{isBot}`, `{isNewAccount}`\n**🌐 Server Info:** `{guildName}`, `{guildId}`, `{memberCount}`, `{humanMembers}`, `{botMembers}`, `{onlineMembers}`\n**🖼️ Visual:** `{avatar}`, `{avatar.small}`, `{guildIcon}`, `{guildBanner}`\n**⏰ Timestamps:** `{currentTime}`, `{member.joinedTimestamp.format.F}`, `{user.createdTimestamp.format.R}`\n**🎲 Dynamic:** `{randomGreeting}`, `{randomWelcome}`, `{timeGreeting}`'
      },
      {
        title: 'Advanced Features',
        content: [
          '**Auto-Role Assignment** - Automatically assign roles to new members',
          '**DM Greetings** - Send personalized direct messages',
          '**Test System** - Preview and test your configuration',
          '**URL Validation** - Automatic URL sanitization and validation',
          '**Error Handling** - Detailed error messages and validation',
          '**Permission Checks** - Validates bot and user permissions',
          '**Multi-format Support** - Text, embeds, or both combined'
        ]
      }
    ]
  },
  'custom-embed': {
    title: 'Custom Embed',
    icon: MessageCircle,
    description: 'Create beautiful, professional-looking embedded messages with rich formatting, interactive buttons, and custom styling.',
    ogDescription: 'Master Zero Degree\'s Custom Embed feature. Create stunning Discord embeds with rich formatting, colors, images, interactive buttons, and professional styling for announcements and messages.',
    sections: [
      {
        title: 'Overview',
        content: 'The Custom Embed system allows you to create rich, visually appealing messages with interactive components that stand out in your Discord server. Perfect for announcements, rules, information displays, and interactive content with buttons.'
      },
      {
        title: 'Features',
        content: [
          'Rich text formatting with custom colors and styling',
          'Custom titles, descriptions, author, and footer text',
          'Interactive buttons with custom actions',
          'Embed cloning and management system',
          'Usage tracking and analytics',
          'Autocomplete for easy embed selection',
          'Modal-based embed builder interface'
        ]
      },
      {
        title: 'Main Commands',
        content: [
          '`/embed create <name> [description]` - Create a new custom embed',
          '`/embed edit <embed>` - Edit an existing embed',
          '`/embed send <embed> [channel]` - Send embed to a channel',
          '`/embed list` - List all custom embeds in server',
          '`/embed delete <embed>` - Delete a custom embed',
          '`/embed clone <embed> <name>` - Clone an existing embed'
        ]
      },
      {
        title: 'Embed Creation Process',
        content: 'When creating an embed with `/embed create`, you\'ll go through these steps:\n\n1. **Basic Information Modal** - Set title, description, color (hex format), author name, and footer text\n2. **Advanced Options** - Choose to add images, fields, buttons, or finish\n3. **Interactive Builder** - Use buttons to enhance your embed:\n   • 🖼 Add Images - Set thumbnail and banner images\n   • 📝 Add Fields - Create structured information sections\n   • 🔘 Add Buttons - Create interactive buttons\n   • ✅ Finish & Save - Finalize and save your embed'
      },
      {
        title: 'Embed Components',
        content: 'Customize your embeds with these components:\n\n**Title** - Main heading (max 256 characters)\n**Description** - Main content text (max 4000 characters)\n**Color** - Sidebar color (hex format: #0099ff or 0x0099ff)\n**Author** - Author name displayed at top\n**Footer** - Footer text at bottom (max 2048 characters)\n**Fields** - Additional structured information\n**Images** - Thumbnail and banner images\n**Buttons** - Interactive buttons (up to 25 buttons in 5 rows)'
      },
      {
        title: 'Interactive Buttons',
        content: 'Add interactive buttons to your embeds:\n\n**Button Styles:**\n• Primary (Blue)\n• Secondary (Gray)\n• Success (Green)\n• Danger (Red)\n• Link (External URL)\n\n**Button Features:**\n• Custom labels and emojis\n• Enable/disable states\n• URL links for external resources\n• Custom actions and responses\n• Up to 5 buttons per row, 5 rows maximum'
      },
      {
        title: 'Management Features',
        content: [
          '**Autocomplete** - Type embed names or IDs for quick selection',
          '**Usage Tracking** - Monitor how often embeds are used',
          '**Cloning** - Duplicate existing embeds with new names',
          '**Permissions** - Requires Manage Messages permission',
          '**Validation** - Automatic validation before sending',
          '**Error Handling** - Detailed error messages for troubleshooting'
        ]
      }
    ]
  },
  automod: {
    title: 'AutoMod System',
    icon: Bot,
    description: 'Coming Soon - Our intelligent automatic moderation system is under development.',
    ogDescription: 'Discover Zero Degree\'s upcoming AutoMod system. An intelligent moderation solution that will automatically handle spam, inappropriate content, and suspicious behavior in your Discord server.',
    sections: [
      {
        title: 'Coming Soon',
        content: 'The AutoMod system is currently under development. Stay tuned for updates!'
      }
    ]
  },
  strikes: {
    title: 'Strike System',
    icon: Gavel,
    description: 'Coming Soon - Our strike management system is under development.',
    ogDescription: 'Learn about Zero Degree\'s upcoming Strike System. A fair and transparent way to manage warnings and infractions in your Discord server with customizable thresholds and automated actions.',
    sections: [
      {
        title: 'Coming Soon',
        content: 'The Strike system is currently under development. Stay tuned for updates!'
      }
    ]
  },
  alerts: {
    title: 'Real-time Alerts',
    icon: Bell,
    description: 'Coming Soon - Our alert notification system is under development.',
    ogDescription: 'Explore Zero Degree\'s upcoming Real-time Alert system. Stay informed about suspicious activities and security threats with instant notifications and detailed incident reports.',
    sections: [
      {
        title: 'Coming Soon',
        content: 'The Alert system is currently under development. Stay tuned for updates!'
      }
    ]
  },
  audit: {
    title: 'Audit Logging',
    icon: ScrollText,
    description: 'Coming Soon - Our audit logging system is under development.',
    ogDescription: 'Discover Zero Degree\'s upcoming Audit Logging system. Keep track of all server events with comprehensive logging, searchable history, and detailed analytics.',
    sections: [
      {
        title: 'Coming Soon',
        content: 'The Audit Log system is currently under development. Stay tuned for updates!'
      }
    ]
  },
  lockdown: {
    title: 'Lockdown Mode',
    icon: Lock,
    description: 'Coming Soon - Our emergency lockdown system is under development.',
    ogDescription: 'Learn about Zero Degree\'s upcoming Lockdown Mode. Protect your server with one-click emergency lockdown features to prevent unauthorized access during security incidents.',
    sections: [
      {
        title: 'Coming Soon',
        content: 'The Lockdown system is currently under development. Stay tuned for updates!'
      }
    ]
  }
};

// Function to render text with bold formatting and inline code
function renderTextWithBold(text: string) {
  // First split by bold markers, then handle code within each part
  const boldParts = text.split(/(\*\*.*?\*\*)/g);

  return boldParts.map((part, boldIndex) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      // Remove the ** markers and render as bold, but also check for code inside
      const boldText = part.slice(2, -2);
      const codeParts = boldText.split(/(`.*?`)/g);

      const boldContent = codeParts.map((codePart, codeIndex) => {
        if (codePart.startsWith('`') && codePart.endsWith('`') && codePart.length > 2) {
          const codeText = codePart.slice(1, -1);
          return <code key={codeIndex} className="bg-slate-800 text-indigo-300 px-1 py-0.5 rounded text-sm font-mono">{codeText}</code>;
        }
        return codePart;
      });

      return <strong key={boldIndex} className="font-bold text-white">{boldContent}</strong>;
    } else {
      // Handle code in regular text
      const codeParts = part.split(/(`.*?`)/g);

      return codeParts.map((codePart, codeIndex) => {
        if (codePart.startsWith('`') && codePart.endsWith('`') && codePart.length > 2) {
          const codeText = codePart.slice(1, -1);
          return <code key={`${boldIndex}-${codeIndex}`} className="bg-slate-800 text-indigo-300 px-1 py-0.5 rounded text-sm font-mono">{codeText}</code>;
        }
        return codePart;
      });
    }
  });
}

function DocPage() {
  const { feature } = useParams();
  const doc = docs[feature as keyof typeof docs];

  useEffect(() => {
    if (doc) {
      // Update meta tags
      document.title = `${doc.title} - Zero Degree Documentation`;

      // Update OG meta tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      const twitterDesc = document.querySelector('meta[name="twitter:description"]');

      if (ogTitle) ogTitle.setAttribute('content', `${doc.title} - Zero Degree Documentation`);
      if (ogDesc) ogDesc.setAttribute('content', doc.ogDescription);
      if (twitterTitle) twitterTitle.setAttribute('content', `${doc.title} - Zero Degree Documentation`);
      if (twitterDesc) twitterDesc.setAttribute('content', doc.ogDescription);
    }
  }, [doc]);

  if (!doc) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Documentation not found</h1>
          <Link to="/" className="text-indigo-300 hover:text-indigo-100 inline-flex items-center">
            <ArrowLeft className="mr-2" /> Return to home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = doc.icon;
  const isComingSoon = !['antinuke', 'welcome', 'custom-embed'].includes(feature as string);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="text-indigo-300 hover:text-indigo-100 inline-flex items-center mb-8">
          <ArrowLeft className="mr-2" /> Return to home
        </Link>

        <div className="bg-slate-900/40 backdrop-blur-sm border border-indigo-800/30 rounded-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-950/50 p-3 rounded-full">
              <Icon className="h-8 w-8 text-indigo-400" />
            </div>
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-white">{doc.title}</h1>
              <p className="text-indigo-200 mt-1">{doc.description}</p>
            </div>
          </div>

          {isComingSoon ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center p-4 bg-indigo-950/50 rounded-full mb-6">
                <AlertTriangle className="h-12 w-12 text-indigo-400 animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-indigo-200 max-w-2xl mx-auto">
                This feature is currently under development. We're working hard to bring you the best possible experience. Check back soon for updates!
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {doc.sections.map((section, index) => (
                <div key={index} className="border-t border-indigo-800/30 pt-6 first:border-0 first:pt-0">
                  <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                  {Array.isArray(section.content) ? (
                    <ul className="list-disc list-inside space-y-2 text-indigo-200">
                      {section.content.map((item, i) => (
                        <li key={i}>{renderTextWithBold(item)}</li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-indigo-200 space-y-4">
                      {section.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="whitespace-pre-wrap font-mono">
                          {renderTextWithBold(paragraph)}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {!isComingSoon && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/40 backdrop-blur-sm border border-indigo-800/30 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Terminal className="h-6 w-6 text-indigo-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Quick Start</h3>
              </div>
              <p className="text-indigo-200">
                Get started with basic setup and configuration commands. Check our documentation for detailed instructions.
              </p>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-sm border border-indigo-800/30 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Settings className="h-6 w-6 text-indigo-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Advanced Configuration</h3>
              </div>
              <p className="text-indigo-200">
                Fine-tune settings and customize behavior to match your server's needs.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DocPage;