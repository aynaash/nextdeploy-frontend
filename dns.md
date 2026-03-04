#  NextDeploy DNS Setup Guide (Serverless)

Target Domain: **nextdeploy.one**
Generated: `Wed, 04 Mar 2026 23:54:55 EAT`

> [!IMPORTANT]
> You need to add **TWO** sets of DNS records to your registrar to go live.
> Need help? Check the [Full Documentation](https://nextdeploy.one/docs)

## 1️⃣ Point your domain at CloudFront
⚠️ **CloudFront Domain: [Pending]**
Run `nextdeploy ship` again after SSL validation to get this value.

## 2️⃣ SSL Certificate Validation (AWS ACM)
| Type | Host (Name) | Target (Value) |
| :--- | :--- | :--- |
| **CNAME** | `_5f2eb772e3877df83fae3182c9e00665.nextdeploy.one.` | `_9a11848523ccbd75913d4e3ffb43c959.jkddzztszm.acm-validations.aws.` |
| **CNAME** | `_5ab8c33b39a34cd316fbac301cc758bf.www.nextdeploy.one.` | `_35cfebb04ef56b961624fbbff26e28d6.jkddzztszm.acm-validations.aws.` |

> [!WARNING]
> **NAMECHEAP & GODADDY USERS**: Your registrar automatically adds your domain to the Host field.
> **DO NOT** include `nextdeploy.one` in the Name/Host field or it will fail.
> 
> ✅ **Correct Host**: `_5f2eb7...` or `@` 
> ❌ **Wrong Host**: `_5f2eb7....nextdeploy.one`

## 🚀 Final Steps
1. Add records in your DNS panel.
2. Wait 2-5 mins.
3. Run `nextdeploy ship` to finish.
